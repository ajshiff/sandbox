/********************************************************************
 * listSubFiles.js
 * Sends an array of file paths to the parent function starting from 
 * an initial directory.
 * 
 * Usage:
 * const lsf = require('./listSubFiles.js');
 * var array;
 * lsf(targetDirectory, (err, results) => {array = results});
 ********************************************************************/
// Declare Dependancies
const fs = require('fs');
const path = require('path');
// const asyncLib = require('async');

/********************************************************************
 * readDirectory() starts in an initial direcotory and sorts files into
 * two arrays, one for directories and one for documents. Any file encoutered
 * that doesn't have read permission or doesn't meet those qualifications is
 * discarded. Documents are sorted into an array and remembered between searches.
 * The array of directories is reset every loop.
 ********************************************************************/
function readDirectory(allFiles, directories) {
    if (directories.length !== 0) { // Are there any sub-directories to search through?
        let newDirectories = [];
        directories.forEach(directory => {
            directory = path.resolve(directory);
            try {
                var files = fs.readdirSync(directory);
                var checkDirectory = true;
            } catch(err) {
                // Something went wrong when trying to read that directory
                console.log('checkDirectory = false: ' + directory);
                console.log(err.message);
                checkDirectory = false;
            }
            if (checkDirectory) {
                files.forEach(file => {
                    file = path.join(directory, file);
                    try {
                        let fileStat = fs.lstatSync( file );
                        var isDirectory = fileStat.isDirectory();
                        var isFile = fileStat.isFile();
                        var doSkipError = false;
                    } catch (err) {
                        // No permissions to check file details
                        console.log(err.message);
                        isDirectory = false;
                        isFile = false;
                        doSkipError = true;
                    }
                    if (isDirectory) {
                        // console.log(file);
                        newDirectories.push(file);
                    } else if (isFile) {
                        // console.log(file);
                        allFiles.push(file);
                    } else if (doSkipError){
                        console.log('doSkipError = true: ' + file ); 
                    } else {
                        // Enter Code here if you want to do something about
                        // files found that aren't files or directories
                    }
                });
            }
        });
        // Run readDirectory() until it's exit condition is met in the if/else at the top.
        readDirectory(allFiles, newDirectories);
        
    } 
    return allFiles;
    
}

/********************************************************************
 * getFiles() gives an overhead summary of what is trying to be
 * accomplished in the this step of the waterfall.
 ********************************************************************/
function getFiles (absolutePath){
    var fileArray = [];
    var directoryArray = [absolutePath];
    return readDirectory(fileArray, directoryArray);
}

/********************************************************************
 * checkVariables() checks the targetDirectory to make sure it is 
 * a directory and not something else, and exists. If something goes
 * wrong, the error is returned which is handled in the parent module
 * in the stepCallback. If everything goes right, then the absolutePath
 * to the targetDirectory is passed into the next callback in the waterfall.
 ********************************************************************/
function checkVariables (targetDirectory){
    var isDirectory = false;
    var error = null;
    try {
        if (fs.existsSync(targetDirectory)) {
            isDirectory = fs.lstatSync(targetDirectory).isDirectory();
        } 
    } catch (err){
        error = 'Something went wrong!\n' + err;
        console.log(error.message);
    }
    if (!isDirectory) {
        error = 'The Path you entered does not lead to a directory.';
        console.log(error.message);
    }
}

/********************************************************************
 * 
 ********************************************************************/
module.exports = (targetDirectory) => {
    targetDirectory = path.resolve(targetDirectory);
    checkVariables(targetDirectory);
    var allFiles = getFiles(targetDirectory);
    return allFiles;
};