<script lang="ts">
  import { revealSidebar } from "../../../stores";
  import Icon from "../../iconography/Icon.svelte";
</script>

<button on:click={() => revealSidebar.set(true)}>
  <Icon type="toc" toolTip="Contents" button="true" tipPos="tooltip-top"/>
</button>
