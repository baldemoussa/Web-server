# Web Server

## By [Mamadou Moussa Balde](https://www.linkedin.com/in/2mb/)

An Express server that serves the page in `public` and one text route. From this folder, `npm start` runs `node server.js`. `npm run dev` runs the same file with nodemon. This run listened at http://localhost:3000.

On startup the server calls `add(1, 2)` and `substract(1, 2)` from `utils/index.js`, then prints:

```
3
-1
Server is running at http://localhost:3000
```

`substract` is spelled that way in the source. `add` returns the sum. `substract` returns the first number minus the second.

## Home page

`express.static` serves the `public` folder, so `GET /` is `public/index.html`. The tab title is **My App**. The heading is "Welcome to my website!" and the image alt text is "Node.js Logo". `style.css` sets that image to 300px wide. The page does not set a font or a background. In this browser the heading is Times New Roman, 32px, black. The screenshot below is on white so that heading and the dark logo stay visible.

![Welcome heading and the Node.js logo](docs/screenshots/home.png)

## GET /v1

`GET /v1` answers `200` with the body `Hello, World!`. The content type is `text/html; charset=utf-8`. The server also prints `Incoming req --> GET /v1`. The page does not set a background. This shot is on white. The text is Times New Roman at 16px.

![Hello, World!](docs/screenshots/hello.png)

## A path with no route

`GET /missing` is the Express 404 page. The tab title is **Error** and the page says `Cannot GET /missing`.

![Cannot GET /missing](docs/screenshots/missing.png)
