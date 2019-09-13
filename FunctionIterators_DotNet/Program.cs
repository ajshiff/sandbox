using System;
using System.Collections.Generic;
					
public class Program
{
	public static void Main()
	{
		var meep = new CoolMeep();
        example1(meep);
        // example2(meep);
	}
	
    private static void example1 (CoolMeep meep) 
    {
        foreach (var num in meep.GetRandomNumbers())
        {
            Console.WriteLine(num);
        }
    }
    
    private static void example2 (CoolMeep meep) 
    {
        var meepEnu = meep.GetRandomNumbers().GetEnumerator();
        meepEnu.MoveNext();
        _ = meepEnu.Current;
    }
}

class CoolMeep 
{
    private Random rand = new Random();
    public IEnumerable<int> GetRandomNumbers()
    {
        int num = 0;
        while (num < 50)
        {
            num = rand.Next(0,51);
            yield return num;
        }
    }
}