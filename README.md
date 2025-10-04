<img src="https://github.com/user-attachments/assets/e5d5e042-0776-4751-ad43-838949fcc9e9" alt="Cachebuster.js Logo" height="50px">

# Cachebuster.js

Welcome to Cachebuster.js! Here, you can turn your site into a non-cached page for all users, without changing the experience, URL, or browser performance.

This README is split into two sections:
- **[Product Info](#-product-info)** — Non-coder section
- **[Developer Info](#-developer-info)** — Code-based section

Click one to read it, or scroll to it!

## 📦 Product Info
As you read in the intro, this library can stop your page from cacheing while keeping the user experience exactly the same and not affecting browser performance.

However, on this section, you can see why this is and what is does (in non-technical, easy-to-understand terms):

---
- **Q:** So, how exactly does Cachebuster.js keep your browser nice and steady while giving the user an experience exactly the same as normal?
- **A:** Cachbuster.js is written in a way the browser can easily execute without lagging, because it uses minimal code.


---
- **Q:** How does it work?
- **A:** Cachbuster.js simply does this:
  - It updates the website with a non-cached version by adding a unique code to the end of the URL, then removing it so the user has the same regualr URL while still keeping it "uncached".
  - This "unique code" causes the browser to treat the website as a whole new page.

## 💻 Developer Info
As for developers, we will tell you how to add Cachebuster.js, and explain the code behind it.

In order to add Cachebuster.js to your website, you must simply add a script with `cachebuster.min.js` to the very top of your HTML document's `<head>`, like shown in the example below:

```html
<head>
  <script src="path/to/cachebuster.min.js></script>
  <!-- Other code here from the rest of your site's head. -->
</head>
```

If you don't want to host the code directly on your server, there's a couple CDN's availible for you:

- ```https://cdn.jsdelivr.net/gh/codecool123/cachebuster.js@main/cachebuster.js```
- ```https://raw.githubusercontent.com/codecool123/cachebuster.js/refs/heads/main/cachebuster.js```

You can also edit the code to check an API of your choice for a true/false response to cache or not. This may be handy.


Now, to describe what the code does:

In a step by step order, it would look something like this:

- Check for the `?cachebust_id=` in the URL.
