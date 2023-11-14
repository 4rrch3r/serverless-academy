# 12. SHORTLINKER API
**How to run application:**



## Documentation### API Endpoints
| HTTP Verbs | Endpoints | Action | Expect | Return codes | Request Example
| --- | --- | --- | --- | --- | --- |
| POST | /link | To retrieve a short version of the link | _body_ `{link:string }` |  200/201/400/500 | _body_ `{link:"https://www.youtube.com/" }`
| GET | /:shortLink | To access a resource by short version of the link | _route parameter_ `shortLink` |  302/400/404/500 |  _route parameter_ `1FGC9I`

<br>

## Task Description

We have all encountered long URLs that are extremely inconvenient to use in, say, the same correspondence. So special services appeared that deal with reducing kilometers of links into something concise. After solving a number of tasks, which you have already managed to do in Serverless Academy, you are now able to write your own links truncator - that is the essence of this task.<br>

**Now a little more detail. Your task is to create a server application which:**<br>

* Will receive a request with a link to a target resource from a user in a POST request;<br>
* As a response it will return a shortened version of the link;<br>
* By further following this link, the user should be able to get to the original resource, which he wanted to shorten.<br><br>

**Requirements**<br>
* Do not use shortening services like TinyURL and their APIs.<br>
* Make sure that your short URL is really short (excluding the domain name, obviously we’re not going to buy a domain name for this task).<br>
* Make sure you validate users input. For example, instead of a valid link a user can enter some nonsense by mistake. Your service should handle such scenarios.<br>
* in this task you have complete freedom to choose which frameworks, tools, and packages to use.<br>


