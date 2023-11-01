## Task Description

In this task, we'll dive a little deeper into working with JSON.<br>

So you have a list of 20 API endpoints. Here they are:
<br>
`https://jsonbase.com/sls-team/json-793
https://jsonbase.com/sls-team/json-955
https://jsonbase.com/sls-team/json-231
https://jsonbase.com/sls-team/json-931
https://jsonbase.com/sls-team/json-93
https://jsonbase.com/sls-team/json-342
https://jsonbase.com/sls-team/json-770
https://jsonbase.com/sls-team/json-491
https://jsonbase.com/sls-team/json-281
https://jsonbase.com/sls-team/json-718
https://jsonbase.com/sls-team/json-310
https://jsonbase.com/sls-team/json-806
https://jsonbase.com/sls-team/json-469
https://jsonbase.com/sls-team/json-258
https://jsonbase.com/sls-team/json-516
https://jsonbase.com/sls-team/json-79
https://jsonbase.com/sls-team/json-706
https://jsonbase.com/sls-team/json-521
https://jsonbase.com/sls-team/json-350
https://jsonbase.com/sls-team/json-64`<br>
Each of them returns a response in a different format and with different key/value pairs. But they all have one thing in common - absolutely all GET requests return JSON that has an _isDone_ key with a boolean value. The queries are divided into four types, where the key/value pair you're looking for is on different nesting levels.<br>


**Requirements**<br>

1. Write an application that queries all of the aforementioned endpoints. Design a scenario where a request will be sent several times (up to three times is enough) in case the previous request fails. If there is no response, exclude the result from the output, but print the error in the console. Execute queries sequentially through async/await;
2. In all received endpoints you need to find the isDone key and find out whether it is True or False.
<br><br>
An ideal result must have the following structure:<br>
The output of your app should look like this:<br>

`$ node json-sorting.js`<br>
[Success] https://jsonbase.com/sls-team/json-1: isDone - True<br>
[Success] https://jsonbase.com/sls-team/json-4: isDone - False<br>
[Success] https://jsonbase.com/sls-team/json-2: isDone - False<br>
[Fail] https://jsonbase.com/sls-team/json-5: The endpoint is unavailable<br>
<br>
Found True values: 14,<br>
Found False values: 6<br>