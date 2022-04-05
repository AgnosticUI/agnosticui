<script>
  import { Disclose } from "agnostic-svelte";
</script>
<section>
  <div class="h4 mbe32 flex items-center">
    <img width="24" height="24" src="/assets/Svelte-icon.svg" alt="Svelte logo" class="mie12" />Svelte Disclose
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
