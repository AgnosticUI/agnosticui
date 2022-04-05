<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Disclose
    </div>
    <div>
      <Disclose title="Roger Federer">
        Roger Federer is a Swiss professional tennis player.
      </Disclose>
      <Disclose title="Serena Williams">
        Serena Jameka Williams is an American professional tennis
        player who has won 23 Grand Slams.
      </Disclose>
      <Disclose title="Stefi Graf">
        Stefanie Maria Graf is a former professional tennis
        player who won 22 Grand Slams.
      </Disclose>
      <Disclose title="Andre Agassi">
        Andre Kirk Agassi is an American former world No. 1
        tennis player who has won 8 Grand Slams.
      </Disclose>
    </div>
    <div class="mbe48">
      <Disclose
        isBackground
        title="Roger Federer"
      >
        Roger Federer is a Swiss professional tennis player.
      </Disclose>
      <Disclose
        isBackground
        title="Serena Williams"
      >
        Serena Jameka Williams is an American professional tennis player.
      </Disclose>
      <Disclose
        isBackground
        title="Stefi Graf"
      >
        Stefanie Maria Graf is a German former professional tennis player.
      </Disclose>
      <Disclose
        isBackground
        title="Andre Agassi"
      >
        Andre Kirk Agassi is an American former world No. 1 tennis player.
      </Disclose>
    </div>
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Disclose } from "agnostic-vue";
</script>
