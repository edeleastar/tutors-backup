<script lang="ts">
  import Icon from "../../iconography/Icon.svelte";
  import type { Lo } from "tutors-reader-lib/src/course/lo";
  import { fade, fly } from "svelte/transition";

  export let lo: Lo;
  let unitId = "";
  if (lo.type === "unit") {
    unitId = lo.id;
  }

  function truncate(input) {
    if (input.length > 26) {
      return input.substring(0, 26) + "...";
    }
    return input;
  }
</script>

<li in:fly="{{ x: -100, duration: 2000 }}" out:fade>
  <a class="font-bold" href="{lo.route}{unitId}">
    <Icon type="{lo.type}" />
    <span class="hidden text-xs lg:block lg:pl-2">{truncate(lo.title)}</span></a>
</li>

