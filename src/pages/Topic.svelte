<script lang="ts">
  import { afterUpdate, getContext, onDestroy, tick } from "svelte";
  import type { Topic } from "tutors-reader-lib/src/course/topic";
  import type { CourseService } from "../services/course-service";
  import type { AnalyticsService } from "../services/analytics-service";
  import CardDeck from "../components/cards/CardDeck.svelte";
  import VideoCard from "../components/cards/VideoCard.svelte";
  import UnitCard from "../components/cards/UnitCard.svelte";
  import TalkCard from "../components/cards/TalkCard.svelte";
  import { currentLo, layout, revealSidebar } from "../stores";
  // @ts-ignore
  import * as animateScroll from "svelte-scrollto";
  import { viewDelay } from "../components/animations";

  export let params: any = {};
  const cache: CourseService = getContext("cache");
  const analytics: AnalyticsService = getContext("analytics");

  let topic: Topic = null;
  let unitId = "";
  let title = "";

  let hide = true;
  setTimeout(function() {
    hide = false;
  }, viewDelay);

  async function getTopic(url) {
    revealSidebar.set(false);
    unitId = "";
    let unitPos = url.indexOf("/unit");
    if (unitPos !== -1) {
      unitId = url.substr(unitPos + 1);
      url = url.substr(0, unitPos);
    }
    topic = await cache.fetchTopic(url);
    if (unitPos !== -1) {
      let unitLo = topic.lo.los.filter((lo) => lo.id == unitId);
      // noinspection TypeScriptValidateTypes
      currentLo.set(unitLo[0]);
    } else {
      // noinspection TypeScriptValidateTypes
      currentLo.set(topic.lo);
      title = topic.lo.title;
      unitId = "";
    }
    analytics.pageLoad(params.wild, cache.course, topic.lo);
    return topic;
  }

  afterUpdate(async () => {
    if (unitId) {
      await tick();
      animateScroll.scrollTo({ delay: 500, element: "#" + unitId });
    } else {
      animateScroll.scrollTo({ delay: 200, element: "#top" });
    }
  });

  let grid = "";

  const unsubscribe = layout.subscribe(layout => {
    if (layout === "compacted") {
      grid = "grid grid-cols-2 gap-2 ";
    } else {
      grid = "";
    }
  });
  onDestroy(unsubscribe);

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#await getTopic(params.wild) then topic}
  {#if !hide}
    <div class="{grid}">
      {#each topic.panelVideos as lo}
        <VideoCard {lo} />
      {/each}
      {#each topic.panelTalks as lo}
        <TalkCard {lo} />
      {/each}
      {#each topic.units as unit}
        <div class="mt-2">
          <UnitCard {unit} />
        </div>
      {/each}
      <CardDeck los={topic.standardLos} />
    </div>
  {/if}
{/await}
