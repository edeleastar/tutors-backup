<script lang="ts">
  import { currentCourse, portfolio } from "../../stores";
  import { onDestroy, onMount } from "svelte";

  onMount(async () => {
    portfolio.set(true);
  });
  onDestroy(async () => {
    portfolio.set(false);
  });
</script>
<div class="container mx-auto mt-8">
  <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box mb-2 p-4 justify-center">
    <div class="flex-1">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" height="40px"
           viewBox="0 0 54.5 39.4" style="enable-background:new 0 0 54.5 39.4;" xml:space="preserve">
        <defs></defs>
        <g>
          <path fill="#37919B" d="M51.5,0H3C1.4,0,0,1.4,0,3v33.3c0,1.7,1.4,3,3,3h48.5c1.7,0,3-1.4,3-3V3C54.5,1.4,53.1,0,51.5,0z M50,34.8H4.5
		V4.5H50V34.8z"></path>
          <g>
            <rect fill="#37919B" x="29" y="26.5" width="12.1" height="4.2"></rect>
            <g>
              <path fill="#37919B" d="M13.4,13.5V8.7h19.1v4.8H26v17.2h-5.9V13.5H13.4z"></path>
            </g>
          </g>
        </g>
      </svg>
      <div class="flex-1 hidden px-2 mx-2 lg:block">
        <p class="text-lg font-bold">Tutors Reader</p>
        <p class="text-sm font-bold">Tutors Open Source Project</p>
      </div>
    </div>
    <a href="https://tutors.dev">
      <div class="btn btn-ghost rounded-2xl">
        Tutors.dev
      </div>
    </a>
  </div>
  <div class="bg-base-200 text-base-content rounded-box mb-2 p-20">
    <div class="text-center">
      <p class="text-4xl font-bold">Oops!</p><br>
      <p class="text-lg">Access to this course is restricted.</p>
      {#if $currentCourse}
        <p class="text-lg">Please contact {$currentCourse?.lo.properties.credits} for permission</p>
      {/if}
    </div>
  </div>
</div>
