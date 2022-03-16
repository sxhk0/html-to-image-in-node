### Creating Images with HTML (using NodeJS)

A experiment that uses html to create images.

###### How it works?

Like in E2E tests, a popular web browser-library called [`puppeter`](https://github.com/puppeteer/puppeteer) is used. The HTML is loaded inside a blank page and the browsers takes a screenshot of the target element.

###### Demo

Used [**TailwindUI modal**](https://tailwindui.com/components/application-ui/overlays/modals) for demo.

![Tailwind Modal](https://cdn.discordapp.com/attachments/953691665611251712/953691702412058674/unknown.png)
![Experiment Output](https://cdn.discordapp.com/attachments/953691665611251712/953691986618097704/1647445917928.png)

> Notice that transparency inside the modal doesn't work because of `page.screenshot` because it literally takes a screenshots and cuts element to fit in image.
