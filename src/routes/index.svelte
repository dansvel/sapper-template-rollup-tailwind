<style>
	h1, figure, p {
		@apply text-center my-0 mx-auto;
	}

	h1 {
    @apply text-3xl uppercase font-bold m-0 mb-4 text-orange-500 font-sans;
	}

	figure {
		@apply m-0 mb-4;
	}

	img {
    @apply w-full max-w-5xl m-0 mb-4;
	}

	p {
		@apply my-0 mx-auto;
	}

  @screen md {
    h1 {
      @apply text-5xl;
    }
  }
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>
<div class="text-3xl font-bold m-0 mb-4 text-orange-500 font-sans">
  tittle above using style tag in svelte, but this line using inline tailwind class
</div>
<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
