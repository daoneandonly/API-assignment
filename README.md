# Coding assignment using an API
This is an assignment made for [Icentro](https://www.incentro.com/en) build using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Made by [Steven Whitton](https://twitter.com/pantheratnight) with ☕ and ❤

## Running the project

Clone the project, in a terminal navigate to the project run the command

```bash
yarn
```
followed by

```bash
yarn dev
```

Next, open [http://localhost:3000](http://localhost:3000) with your browser to run the project locally.


## Development notes

### Framework
I have chosen to build with React and NextJS with Typescript, as it's the framework/stack I'm the most comfortable with. My other options would've been to go for plain HTML/CSS/JS or Svelte. Plain JS seemed a bit rough to quickly sketch up such a project, and Svelte has changed a lot since its use of Sveltekit and I haven't kept up with the latest changes.

Furthermore, I'm using SCSS with SCCS modules for styles. While it's not default in Next it helps me writing very fast styles. SCSS Modules are a nice way to keep my styles scoped. I've opted to *not* use Tailwind, as I think this is far to complex for such a small project, and setup would cost me a lot of time.

As instructed, the API used for this project is [fakestoreapi](https://fakestoreapi.com/docs).

I've opted to fulfill the requirements using a routing approach instead of a SPA rerendering approach. I feel like there is pros and cons to either, but I like the option of being able to route to search queries and that requires implementing proper routing. Both could also be combined, but that felt like out of scope for this demo.

The project is setup inside of the `src` folder which holds the following sub-folders:

 - `api` wherein function for api calls reside.
 - `components` wherein  components are organized in `atoms`, `molecules` and `organisms` according to atomic design
 - `pages` where pages are located according the the Next structure
 - `styles` where all styles are defined in SCSS

### Requirements
The assignment set a list of requirements, I'll explain my thoughts and choices for every one of them.

#### Show product items 
I've created a folder where API calls are being made through the `fetch` method (these are only `GET` requests for the purposes of this demo), grouped by what kind of data it returns. Every page calls these functions inside of a `getServerSideProps` function, which is what Next uses to fetch server data. These gets passed inside of a `props` object and destructured in the page component itself.

The products are shown through looping (mapping) over them and returning a `<ProductItem />` component for each. They are displayed using CSS grid and size accordingly on smaller screens.

#### Order by Category
As with products, each page also fetches the categories from the API. These get passed into the `<Nav />` and rendered as links using the Next `<Link />` component. These are slightly transformed to show them with a capital for their first letter. The pages are setup dynamically based on these what categories return from the API. The links to these require the `href` to be encoded through `encodeURIComponent` function, to escape characters like empty spaces in "men's fashion". 

Each category page fetches data based on its URL using the `getProductByCategory` function.

#### Search
Searching is implemented entirely through routing. A submit on the `<SearchInput />` form, routes the user to a `/search?q=` path, using Next Router. In this results-page, same same `getAllProducts` function gets called, but inside of `getServerSideProps` the data gets filtered based on the query that is present in the URL. In case there is no data to be shown, an error message along with a sad emoji is rendered.

In searching, I've made sure to compare values that require the exact letter casing. 

### Further thoughts and improvements
I've completed this assignment over the course of a little over day's time. A big chunk time went into setting up the project. Luckily the API was straightforward and well-documented. If given the time, there are some improvements to made. I've made list of these improvements as well as some other thoughts I wanted to share.

#### Framermotion
I would have to shown some more animation motion, but it seemed a bit overboard for such a small demo. It's also quite time-intensive to implement. So I've opted to use some basic but pleasing-to-look-at CSS transitions and hover animations.

#### Accesibility
I've done my best to make this project as accessible for a demo as possible. The entire project is easily 'tababble' and shows proper highlighting when doing so. If given more time, effort could be spent on applying more `aria-labels`.  

#### No hooks
Even though I'm plenty comfortable with implementing React hooks, there was no need for it inside of this project. Filtered or searched data could've been rerendered using `useEffect` in a page, but I've opted to use Routing instead.

#### Use of Git
I've made sure to commit often and use descriptive commit messages. I've had very little reason to use git branches, since I'm working on this alone in a short time-frame.

#### Product Page
The products currently link to a product page that has not yet been implemented. I'm trying to show the proper link to these items is rendered accordingly, but building seems a bit out of scope for this demo.

#### Documentation
Documentation could be made for the components. I prefer to do this in Storybook. For the purpose of this demo I've added Markdown files for each atomic size of components to at least list them. In a larger project this would've been used to explain the workings of a component, what data it expects and what optional features it has.

#### Structuring 
Some functions could've been utils functions like `formatPrice` and `capitalizeFirstLetter`, but considering the are only used inside of a single component I've opted to let them live inside of their own scope. 

The SCSS could use some better folder structuring instead of being all together inside of a single folder. Perhaps nested into the same atomic sizes as the components. Furthermore setting up a list of CSS variables would be a great addition to this project. I've used CSS variables where applicable here but when using with a consistent Design System, this could prevent some repeated code as well as provide some consistency over the whole project.