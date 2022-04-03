<template>
  <section id="how-to-start" class="container how-to-start">
    <n-h2 class="secondary-heading">Jak zacząć</n-h2>

    <div class="container grid grid--2-cols grid--center-v">
      <!-- STEP 01 -->
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">01</n-p>
        <n-h3 class="tertiary-heading"
          >Tell us what you like (and what not)</n-h3
        >
        <n-p class="how-to-start__step-description">
          Never again waste time thinking about what to eat! Omnifood AI will
          create a 100% personalized weekly meal plan just for you. It makes
          sure you get all the nutrients and vitamins you need, no matter what
          diet you follow!
        </n-p>
      </div>
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/dashboard.jpg"
          class="how-to-start__step-img"
          alt="main dashboard screen"
        />
      </div>

      <!-- STEP 02 -->
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/create-event.jpg"
          class="how-to-start__step-img custom"
          alt="iPhone app
            meal approving plan screen"
        />
      </div>
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">02</n-p>
        <n-h3 class="tertiary-heading">Approve your weekly meal plan</n-h3>
        <n-p class="how-to-start__step-description">
          Once per week, approve the meal plan generated for you by Omnifood AI.
          You can change ingredients, swap entire meals, or even add your own
          recipes.
        </n-p>
      </div>

      <!-- STEP 03 -->
      <div class="how-to-start__step-text-box">
        <n-p class="how-to-start__step-number">03</n-p>
        <n-h3 class="tertiary-heading">Receive meals at convenient time</n-h3>
        <n-p class="how-to-start__step-description">
          Best chefs in town will cook your selected meal every day, and we will
          deliver it to your door whenever works best for you. You can change
          delivery schedule and address daily!
        </n-p>
      </div>
      <div class="how-to-start__step-img-box">
        <img
          src="@/assets/images/details.jpg"
          class="how-to-start__step-img"
          alt="iPhone app
            delivery screen"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH2, NH3, NP } from 'naive-ui';

export default defineComponent({
  components: {
    NH2,
    NH3,
    NP,
  },
});
</script>

<style lang="scss" src="./WHow.scss" scoped />
