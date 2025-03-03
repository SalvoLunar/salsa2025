<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { setLocale } = useI18n()
</script>
<style lang="scss" scoped>
  .language-selector {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: flex-end;
    padding: 20px;
    background-color: rgba(#FFFFFF, 0.5);
    position: fixed;
    width: 100%;
    z-index: 100;
  }
  .button {
    margin-left: 5px;
    background-color: blueviolet;
    padding:10px 0px;
    width: 30px;
    height: 30px;
    line-height: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    text-align: center;
    color: white;
  }
</style>
<template>
    <div>
        <div class="language-selector">
          <p>{{ $t('welcome') }}</p>
          <a class="button" @click="setLocale('en')">en</a>
          <a class="button" @click="setLocale('it')">it</a>
        </div>
    </div>
</template>