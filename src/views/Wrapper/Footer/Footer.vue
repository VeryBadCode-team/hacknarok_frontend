<template>
  <footer class="container footer">
    <div class="footer__grid">
      <div class="logo-col">
        <div class="logo-col__logo-container">
          <a href="#" class="logo">
            <img
              class="logo__image"
              alt="Omnifood logo"
              src="src\assets\images\logo.svg"
            />
            <p class="logo__name">JoinMe</p>
          </a>
        </div>

        <ul class="logo-col__social-links">
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-facebook.svg"
              />
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-instagram.svg"
              />
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <img
                class="footer-link__social-icon"
                src="@/assets/images/icons/logo-twitter.svg"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="address-col">
        <p class="footer-heading">Contact us</p>
        <address class="contacts">
          <p class="contacts__address">
            623 Harrison St., 2nd Floor, San Francisco, CA 94107
          </p>
          <p>
            <a class="footer-link" href="tel:415-201-6370">415-201-6370</a
            ><br />
            <a class="footer-link" href="mailto:hello@omnifood.com"
              >hello@omnifood.com</a
            >
          </p>
        </address>
      </div>

      <nav class="nav-col">
        <p class="footer-heading">Account</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Create account</a></li>
          <li><a class="footer-link" href="#">Sign in</a></li>
          <li><a class="footer-link" href="#">iOS app</a></li>
          <li><a class="footer-link" href="#">Android app</a></li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">Company</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">About Omnifood</a></li>
          <li><a class="footer-link" href="#">For Business</a></li>
          <li><a class="footer-link" href="#">Cooking partners</a></li>
          <li><a class="footer-link" href="#">Careers</a></li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">Resources</p>
        <ul class="footer-nav">
          <li><a class="footer-link" href="#">Recipe directory</a></li>
          <li><a class="footer-link" href="#">Help center</a></li>
          <li><a class="footer-link" href="#">Privacy & terms</a></li>
        </ul>
      </nav>
      <p class="copyright">
        Copyright &copy; <span class="year">2022</span> by VeryBadCode All
        rights reserved.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NH2, NP, NButton, NForm, NFormItem, NInput } from 'naive-ui';

export default defineComponent({
  components: {
    NH2,
    NP,
    NButton,
    NForm,
    NFormItem,
    NInput,
  },
});
</script>

<style lang="scss" src="./Footer.scss" />
