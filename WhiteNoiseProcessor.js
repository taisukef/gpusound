// https://ics.media/entry/11292/
const rnorm = () => { // 0.5が中央地
	for (;;) {
		const r1 = Math.random();
		const r2 = Math.random();
		const n = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
		const r = (n + 3) / 6;
		if (r >= 0 && r < 1.) {
			return r;
		}
	}
}

class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach(ch => {
      for (let i = 0; i < ch.length; i++) {
        // ch[i] = (Math.random() * 2 - 1) * .2;
        ch[i] = (rnorm() * 2 - 1) * .2;
      }
    });
    return true;
  }
}

registerProcessor("WhiteNoiseProcessor", WhiteNoiseProcessor);

