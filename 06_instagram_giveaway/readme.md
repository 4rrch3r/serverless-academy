# 6. INSTAGRAM GIVEAWAY
**How to run application:**

`npm run start`<br>

## Task Description

The goal of this task is to learn methods of sorting and selecting values. All you need to implement it is vanilla JavaScript without any external dependencies.<br>

What makes the task interesting is that at one time we used a similar algorithm to find the likes of users in 10 posts in a client-side giveaway. It was necessary to find out who actually liked all ten posts.
<br>

**Overview**<br>

You have 20 text files ([download](https://www.dropbox.com/sh/n27tw64o6w4pb7q/AADUnH6b8c-eHCZAm8K0aCSra?dl=0)), each with 100,000 word combinations. The total is 2 million word combinations. They were generated from two batches of 400 random words each, so they are repeatedly repeated in all or some of the files.
<br>
You need:<br>

1. Determine how many **unique usernames** there are in all the specified files (occurring at least once in any of the files);
2. Determine how many usernames occur in **all 20 files**;
3. Find out how many usernames occur in **at least 10 files**.<br>

**Requirements**<br>
Your program should have 3 different functions that return an integer. For example:<br><br>
uniqueValues(); // returns 1234<br>
existInAllFiles(); // returns 42<br>
existInAtleastTen(); // returns 50<br>

---
**NOTE:**Make sure you measure the performance of your program.<br>

If it takes more than a few seconds to process, you are doing something wrong. Also, report the elapsed time in the program’s output.<br>
