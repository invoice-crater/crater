<template>
  <footer class="site-footer">
    <div class="text-right">
      {{ $t('general.powered_by') }}
      <a
        href="https://acelords.space/"
        target="_blank">AceLords Systems
      </a>
    </div>
  </footer>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      footer: 'footer'
    }
  }
}
</script>
