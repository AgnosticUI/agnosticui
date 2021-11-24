<script>
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Disclose } from "agnostic-vue";

export default {
  name: "DiscloseExamples",
  components: {
    Disclose,
  },
};
</script>
<template>
  <section>
    <h3>Disclose default</h3>
    <Disclose
      is-open
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the
      Association of Tennis Professionals. He has won 20 Grand Slam men&apos;s singles titles, an
      all-time record shared with Rafael Nadal and Novak Djokovic (Wikipedia).
    </Disclose>
    <Disclose title="Serena Williams">
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam
      singles titles, the most by any player in the Open Era, and the second-most of all time behind
      Margaret Court. The Women&apos;s Tennis Association ranked her singles world No. 1 on eight
      separate occasions between 2002 and 2017.(Wikipedia).
    </Disclose>
    <Disclose title="Stefi Graf">
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1
      for a record 377 weeks and won 22 Grand Slam singles titles, which is the second-most since
      the introduction of the Open Era in 1968 and third-most of all-time behind Margaret Court and
      Serena Williams (Wikipedia).
    </Disclose>
    <Disclose title="Andre Agassi">
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major
      champion and a 1996 Olympic gold medalist, as well as a runner-up in seven other Grand Slam
      tournaments. Agassi was the first man to win four Australian Open singles titles in the Open
      Era (Wikipedia).
    </Disclose>
  </section>
  <section class="mbe48">
    <h3>Disclose with background</h3>
    <p class="mbs16 mbe24">The earlier example favors using a &ldquo;clean&rdquo; if minimalist style. However,
      there may be use cases that that require a stronger visual affordance for the disclose elements themeselves.
      If that's the case, you can utilize the <code>isBackground</code> prop which achieves the following:</p>
    <Disclose
      isBackground
      title="Roger Federer"
    >
      Roger Federer is a Swiss professional tennis player. He is ranked No. 11 in the world by the Association of Tennis
      Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak
      Djokovic (Wikipedia).
    </Disclose>
    <Disclose
      isBackground
      title="Serena Williams"
    >
      Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most
      by any player in the Open Era, and the second-most of all time behind Margaret Court. The Women's Tennis Association
      ranked her singles world No. 1 on eight separate occasions between 2002 and 2017.(Wikipedia).
    </Disclose>
    <Disclose
      isBackground
      title="Stefi Graf"
    >
      Stefanie Maria Graf is a German former professional tennis player. She was ranked world No. 1 for a record 377 weeks
      and won 22 Grand Slam singles titles, which is the second-most since the introduction of the Open Era in 1968 and
      third-most of all-time behind Margaret Court and Serena Williams (Wikipedia).
    </Disclose>
    <Disclose
      isBackground
      title="Andre Agassi"
    >
      Andre Kirk Agassi is an American former world No. 1 tennis player. He is an eight-time major champion and a 1996
      Olympic gold medalist, as well as a runner-up in seven other Grand Slam tournaments. Agassi was the first man to win
      four Australian Open singles titles in the Open Era (Wikipedia).
    </Disclose>
  </section>
</template>
