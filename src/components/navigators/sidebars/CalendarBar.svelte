<script lang="ts">
  import { beforeUpdate, getContext } from "svelte";
  import type { Course } from "tutors-reader-lib/src/course/course";
  import type { CourseService } from "../../../services/course-service";
  import { revealCalendar } from "../../../stores";
  import SidebarComponent from "./SidebarComponent.svelte";

  let course: Course = null;
  const cache: CourseService = getContext("cache");
  let title = "";
  let calendar;
  let currentWeek;
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let display = false;
  beforeUpdate(() => {
    course = cache.course;
    if (course) {
      display = true;
      title = course.lo.title;
      calendar = course.calendar;
      currentWeek = course.currentWeek;
    }
  });
</script>

{#if $revealCalendar && display}
  <SidebarComponent title="Academic Calendar" show={revealCalendar} origin="left-0" direction={-1000}>
    <table class="table-auto w-full text-base-content prose">
      <caption>{calendar.title} : {title} </caption>
      <thead><br>
        <tr>
          <th class="w-1/3 text-center">Week No.</th>
          <th class="w-1/3 text-center">Type</th>
          <th class="w-1/3 text-center">Date Starts</th>
        </tr>
      </thead>
      <tbody class="text-center">
        {#each calendar.weeks as week}
          {#if currentWeek.title == week.title}
            <tr class="bg-red-500 text-white">
              <td>{week.title}</td>
              <td>{week.type}</td>
              <td>{monthNames[week.dateObj.getMonth(week.dateObj)]} {week.dateObj.getDate()}</td>
            </tr>
          {:else}
            <tr>
              <td>{week.title}</td>
              <td>{week.type}</td>
              <td>{monthNames[week.dateObj.getMonth(week.dateObj)]} {week.dateObj.getDate()}</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </SidebarComponent>
{/if}
