<script lang="ts">
  import { layout } from "../../../stores";
  import Icon from "../../iconography/Icon.svelte";

  function applyInitialLayout() {
    const savedLayout = window.localStorage.getItem("site-layout");
    if (savedLayout != null) {
      layout.set(savedLayout);
    } else {
      layout.set("expanded");
      window.localStorage.setItem("site-layout", "expanded");
    }
  }

  function toggleLayout() {
    if ($layout === "compacted") {
      layout.set("expanded");
      window.localStorage.setItem("site-layout", "expanded");
    } else {
      layout.set("compacted");
      window.localStorage.setItem("site-layout", "compacted");
    }
  }

  function getOppositeLayout(layout: string): string {
    if (layout === "compacted") {
      return "expanded";
    } else {
      return "compacted";
    }
  }

  applyInitialLayout();
</script>

<button on:click={() => toggleLayout()}>
  <Icon type="{$layout}" toolTip="Switch layout" button="true" />
</button>
