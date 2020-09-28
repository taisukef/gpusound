class SineWaveProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.cnt = 0;
  }
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach(ch => {
      for (let i = 0; i < ch.length; i++) {
        ch[i] = Math.sin(this.cnt) * .2;
        this.cnt += .1;
      }
    })
    return true;
  }
}

registerProcessor("SineWaveProcessor", SineWaveProcessor);
