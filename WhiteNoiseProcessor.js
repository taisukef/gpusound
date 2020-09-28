class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach(ch => {
      for (let i = 0; i < ch.length; i++) {
        ch[i] = (Math.random() * 2 - 1) * .2;
      }
    })
    return true;
  }
}

registerProcessor("WhiteNoiseProcessor", WhiteNoiseProcessor);

