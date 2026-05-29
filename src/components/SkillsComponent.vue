<script setup lang="ts">
type Skill = {
  text: string;
  tags?: string[];
  color: "blue" | "orange" | "green" | "raisin";
};

const skills: Skill[] = [
  {
    text: "Bachelors in Business Administration, majoring in Business Information Systems",
    tags: ["BBA", "BIS"],
    color: "orange",
  },
  {
    text: "Experience with web development frameworks and languages",
    tags: ["JavaScript", "PHP", "Vue", "Tailwind", "SilverStripe", "JQuery"],
    color: "blue",
  },
  {
    text: "Experience with container orchestration",
    tags: ["Docker Swarm", "Kubernetes"],
    color: "green",
  },
  {
    text: "Experience with all major cloud platforms",
    tags: ["GCP", "Azure", "AWS"],
    color: "blue",
  },
  {
    text: "Backend microservice development",
    tags: [".NET 10", "ASP.NET Core", "NestJS"],
    color: "orange",
  },
  {
    text: 'Quick learner, easily teachable - maybe not a "skill", but a nice trait!',
    color: "raisin",
  },
];

const accentBg: Record<Skill["color"], string> = {
  blue: "!bg-aliceblue-200 dark:!bg-aliceblue-900",
  orange: "!bg-atomictangerine-100 dark:!bg-atomictangerine-900",
  green: "!bg-ivory-200 dark:!bg-ivory-800",
  raisin: "!bg-raisinblack-200 dark:!bg-raisinblack-800",
};

const stripeMap: Record<Skill["color"], string> = {
  blue: "bg-aliceblue-400",
  orange: "bg-atomictangerine-500",
  green: "bg-ivory-500",
  raisin: "bg-raisinblack-400",
};
</script>

<template>
  <div class="mb-12 lg:w-[47%]">
    <h2 class="subheader text-2xl font-bold md:text-3xl xl:text-4xl mb-6">Skills</h2>
    <ul class="space-y-5">
      <li v-for="(skill, i) in skills" :key="i" class="neo-card overflow-hidden dark:text-white">
        <div class="h-3 w-full border-b-4 border-black" :class="stripeMap[skill.color]"></div>
        <div class="p-4 md:p-5">
          <p class="header text-sm md:text-base leading-6">{{ skill.text }}</p>
          <div v-if="skill.tags" class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="tag in skill.tags"
              :key="tag"
              :class="`neo-tag text-xs md:text-sm ` + accentBg[skill.color]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
