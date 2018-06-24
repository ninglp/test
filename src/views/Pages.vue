<template>
    <div>
    <app-head></app-head>
    <router-view></router-view>
    <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from '@/components/Header'
import appFooter from '@/components/Footer'

export default {
  name: 'pages',
  components: {
    'app-head': appHeader,
    'app-footer': appFooter
  }
}
</script>
