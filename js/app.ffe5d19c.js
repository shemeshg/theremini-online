(function(e){function t(t){for(var n,a,c=t[0],r=t[1],l=t[2],u=0,h=[];u<c.length;u++)a=c[u],o[a]&&h.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},o={app:0},s=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b8cabc56"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],i=o[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise(function(t,n){i=o[e]=[t,n]});t.push(i[2]=n);var s,r=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),s=function(t){l.onerror=l.onload=null,clearTimeout(u);var i=o[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");a.type=n,a.request=s,i[1](a)}o[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,r.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/theremini-online/",c.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("cd49")},2856:function(e,t,i){},"5c0b":function(e,t,i){"use strict";var n=i("2856"),o=i.n(n);o.a},cd49:function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],a=(i("5c0b"),i("2877")),c={},r=Object(a["a"])(c,o,s,!1,null,null,null);r.options.__file="App.vue";var l=r.exports,u=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("HelloWorld")],1)},h=[],m=i("c665"),v=i("dc0a"),p=i("d328"),C=i("11d9"),S=i("9ab4"),P=i("60a3"),g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello",staticStyle:{"text-align":"left"}},[e._m(0),e._m(1),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("p",[i("label",{staticClass:"w3-text-grey"},[e._v(" click to start Chrome Midi")]),i("br"),i("button",{staticClass:"w3-button w3-teal",on:{click:e.doConnect}},[e._v("Start Midi")]),e._v(" \n       "+e._s(e.msgConnected)+"\n    ")]),i("p",[i("label",{staticClass:"w3-text-grey"},[e._v('MIDI IN  - Select "Moog theremini"')]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.midiInput,expression:"midiInput"}],staticClass:"w3-select w3-teal",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.midiInput=t.target.multiple?i:i[0]}}},e._l(e.midiInputs,function(t){return i("option",{domProps:{value:t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),i("p",[i("label",{staticClass:"w3-text-grey"},[e._v("MIDI OUT - 'IAC Driver Bus' or hardware")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.midiOutput,expression:"midiOutput"}],staticClass:"w3-select w3-teal",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.midiOutput=t.target.multiple?i:i[0]}}},e._l(e.midiOutputs,function(t){return i("option",{domProps:{value:t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")])}))]),i("p",[i("label",{staticClass:"w3-text-grey"},[e._v("Run theremin routing")]),i("br"),i("button",{staticClass:"w3-button w3-teal",on:{click:e.doStartVolumeRouting}},[e._v("Start Routing")]),e._v(" \n       "+e._s(e.msgRouted)+"\n    ")]),i("p",[i("label",{staticClass:"w3-text-grey"},[e._v(" Stop theremin routing")]),i("br"),i("button",{staticClass:"w3-button w3-teal",on:{click:e.doStopVolumeRouting}},[e._v("Stop Routing")])]),i("W3InputNumber",{attrs:{name:"Receive from channel (0 is all)"},model:{value:e.receiveFromChannel,callback:function(t){e.receiveFromChannel=t},expression:"receiveFromChannel"}}),i("W3InputNumber",{attrs:{name:"Send to channel (0 is all)"},model:{value:e.sendToChannel,callback:function(t){e.sendToChannel=t},expression:"sendToChannel"}})],1)]),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("h2",[e._v("Optional - VCV Mode, Route Pitch 14Bit MIDI, to Pitch weel message")]),i("W3Checkbox",{attrs:{name:"Is active"},model:{value:e.isVcvMode,callback:function(t){e.isVcvMode=t},expression:"isVcvMode"}})],1)]),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("h2",[e._v("Optional - trigger notes from JSON array/Custom scale (routing must be started first)")]),i("W3Checkbox",{attrs:{name:"Is active"},model:{value:e.seqModIsActive,callback:function(t){e.seqModIsActive=t},expression:"seqModIsActive"}}),i("p",[i("label",{staticClass:"w3-text-grey"},[e._v("JSON of notes/cords sequence")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonSequence,expression:"jsonSequence"}],staticClass:"w3-input w3-border",attrs:{placeholder:""},domProps:{value:e.jsonSequence},on:{input:function(t){t.target.composing||(e.jsonSequence=t.target.value)}}})]),i("W3Checkbox",{attrs:{name:"Sequence cords as custom scale"},model:{value:e.isSequenceCordsAsCustomScale,callback:function(t){e.isSequenceCordsAsCustomScale=t},expression:"isSequenceCordsAsCustomScale"}}),i("W3InputNumber",{attrs:{name:"Spaces between custom scale notes"},model:{value:e.semitonsBetweenCustomScaleNotes,callback:function(t){e.semitonsBetweenCustomScaleNotes=t},expression:"semitonsBetweenCustomScaleNotes"}}),i("W3Checkbox",{attrs:{name:"Repeat sequence (loop)"},model:{value:e.isRepeatSequence,callback:function(t){e.isRepeatSequence=t},expression:"isRepeatSequence"}}),i("W3InputNumber",{attrs:{name:"Maximum bend range in sequence mode"},model:{value:e.sequenceModeMaxBendRange,callback:function(t){e.sequenceModeMaxBendRange=t},expression:"sequenceModeMaxBendRange"}})],1)]),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("h2",[e._v("Optional - Send CC instead of pitch")]),i("W3Checkbox",{attrs:{name:"Is active"},model:{value:e.ccpitchIsActive,callback:function(t){e.ccpitchIsActive=t},expression:"ccpitchIsActive"}}),i("W3Checkbox",{attrs:{name:"Play pitch AND CC"},model:{value:e.ccpitchIsPlayPitchAndCC,callback:function(t){e.ccpitchIsPlayPitchAndCC=t},expression:"ccpitchIsPlayPitchAndCC"}}),i("W3InputNumber",{attrs:{name:"CC to send to (1 is Modulation Wheel)"},model:{value:e.ccpitchSendToCcChannel,callback:function(t){e.ccpitchSendToCcChannel=t},expression:"ccpitchSendToCcChannel"}}),i("W3InputNumber",{attrs:{name:"Negative range - cc start"},model:{value:e.ccpitchNegativeSendToMinVal,callback:function(t){e.ccpitchNegativeSendToMinVal=t},expression:"ccpitchNegativeSendToMinVal"}}),i("W3InputNumber",{attrs:{name:"Negative range - cc end "},model:{value:e.ccpitchNegativeSendToMaxVal,callback:function(t){e.ccpitchNegativeSendToMaxVal=t},expression:"ccpitchNegativeSendToMaxVal"}}),i("W3InputNumber",{attrs:{name:"Positive range - cc start"},model:{value:e.ccpitchPositiveSendToMinVal,callback:function(t){e.ccpitchPositiveSendToMinVal=t},expression:"ccpitchPositiveSendToMinVal"}}),i("W3InputNumber",{attrs:{name:"Positive range - cc end "},model:{value:e.ccpitchPositiveSendToMaxVal,callback:function(t){e.ccpitchPositiveSendToMaxVal=t},expression:"ccpitchPositiveSendToMaxVal"}})],1)]),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("h2",[e._v("Volume default parameters ")]),i("W3InputNumber",{attrs:{name:"Volume Input CC"},model:{value:e.volumeInputCC,callback:function(t){e.volumeInputCC=t},expression:"volumeInputCC"}}),i("W3InputNumber",{attrs:{name:"Trigger new note above posision"},model:{value:e.volumeTriggerPlayAbouve,callback:function(t){e.volumeTriggerPlayAbouve=t},expression:"volumeTriggerPlayAbouve"}}),i("W3InputNumber",{attrs:{name:"Stop current playing note below position"},model:{value:e.volumeTriggerStopBelow,callback:function(t){e.volumeTriggerStopBelow=t},expression:"volumeTriggerStopBelow"}}),i("W3InputNumber",{attrs:{name:"Volume new notes will be played at "},model:{value:e.volumeSendToResetVal,callback:function(t){e.volumeSendToResetVal=t},expression:"volumeSendToResetVal"}}),i("W3InputNumber",{attrs:{name:"Keep playing new note in same velocity for X milliseconds"},model:{value:e.volumeIgnoreVolumeChangeInMillisecondsAfterNewNote,callback:function(t){e.volumeIgnoreVolumeChangeInMillisecondsAfterNewNote=t},expression:"volumeIgnoreVolumeChangeInMillisecondsAfterNewNote"}}),i("W3InputNumber",{attrs:{name:"CC to send to (7 is midi volume)"},model:{value:e.volumeSendToCcChannel,callback:function(t){e.volumeSendToCcChannel=t},expression:"volumeSendToCcChannel"}}),i("W3InputNumber",{attrs:{name:"Sensitivity Out - cc start"},model:{value:e.volumeSendToMinVal,callback:function(t){e.volumeSendToMinVal=t},expression:"volumeSendToMinVal"}}),i("W3InputNumber",{attrs:{name:"Sensitivity Out - cc end"},model:{value:e.volumeSendToMaxVal,callback:function(t){e.volumeSendToMaxVal=t},expression:"volumeSendToMaxVal"}}),i("W3InputNumber",{attrs:{name:"Sensitivity In - cc start (can be reversed)"},model:{value:e.volumeStartCcPosition,callback:function(t){e.volumeStartCcPosition=t},expression:"volumeStartCcPosition"}}),i("W3InputNumber",{attrs:{name:"Sensitivity in - cc end (can be reversed)"},model:{value:e.volumeEndCcPosition,callback:function(t){e.volumeEndCcPosition=t},expression:"volumeEndCcPosition"}}),i("W3Checkbox",{attrs:{name:"Sensitivity In - Mute abouve cc end"},model:{value:e.volumeIsMuteAbouveEndCcPosition,callback:function(t){e.volumeIsMuteAbouveEndCcPosition=t},expression:"volumeIsMuteAbouveEndCcPosition"}})],1)]),i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-card"},[i("h2",[e._v("Pitch default parameters ")]),i("W3InputNumber",{attrs:{name:"Pitch Input CC"},model:{value:e.pitchInputCC,callback:function(t){e.pitchInputCC=t},expression:"pitchInputCC"}}),i("W3InputNumber",{attrs:{name:"Semitones per pitch bend"},model:{value:e.pitchSemitonPerOctaveBend,callback:function(t){e.pitchSemitonPerOctaveBend=t},expression:"pitchSemitonPerOctaveBend"}}),i("W3InputNumber",{attrs:{name:"Trigger note when Pitched bend more then X semitones"},model:{value:e.pitchSemitonsAutoTrigerNote,callback:function(t){e.pitchSemitonsAutoTrigerNote=t},expression:"pitchSemitonsAutoTrigerNote"}}),i("W3InputNumber",{attrs:{name:"Keep playing new note in same pitch for X milliseconds"},model:{value:e.pitchIgnorePitchbendChangeInMillisecondsAfterNewNote,callback:function(t){e.pitchIgnorePitchbendChangeInMillisecondsAfterNewNote=t},expression:"pitchIgnorePitchbendChangeInMillisecondsAfterNewNote"}}),i("W3InputNumber",{attrs:{name:"Sensitivity Out - from note"},model:{value:e.pitchMidiStartNote,callback:function(t){e.pitchMidiStartNote=t},expression:"pitchMidiStartNote"}}),i("W3InputNumber",{attrs:{name:"Sensitivity Out - to note"},model:{value:e.pitchMidiEndNote,callback:function(t){e.pitchMidiEndNote=t},expression:"pitchMidiEndNote"}}),i("W3InputNumber",{attrs:{name:"Sensitivity In - cc start (can be reversed)"},model:{value:e.pitchStartCcPosition,callback:function(t){e.pitchStartCcPosition=t},expression:"pitchStartCcPosition"}}),i("W3InputNumber",{attrs:{name:"Sensitivity in - cc end (can be reversed)"},model:{value:e.pitchEndCcPosition,callback:function(t){e.pitchEndCcPosition=t},expression:"pitchEndCcPosition"}})],1)])])},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"w3-container w3-teal"},[i("h1",[e._v("Connect theremini to external Synthesizer")]),i("p",[e._v("v0.010")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"w3-container"},[i("div",{staticClass:"w3-panel w3-pale-green"},[i("p",[e._v("\n      For software synth with logic pro (OSX), go to \"Audio MIDI setup\" and enable the 'IAC Driver Bus', \n      this is not required for external hardware device.\n    ")]),i("p",[e._v("\n      Ensure 'Semitones per pitch bend' match your 'bend' parameter in the software synth. or hardware.\n    ")]),i("p",[e._v("\n      Set the theremini Volume for CC 21 7bit, Pitch for 20 14 bit, midi send interval 20ms \n    ")])])])}],b=(i("c5f6"),i("aa9a")),y=(i("7f7f"),i("6b54"),i("ac4d"),i("8a81"),i("ac6a"),function(){function e(){Object(m["a"])(this,e)}return Object(b["a"])(e,null,[{key:"removeEntriesFromAry",value:function(e,t,i){if(t instanceof Array){var n=!0,o=!1,s=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var r=a.value;this._removeEntryFromAry(e,r,i)}}catch(e){o=!0,s=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw s}}}else this._removeEntryFromAry(e,t,i)}},{key:"addEntriesToAry",value:function(e,t,i){if(this.removeEntriesFromAry(e,t,i),t instanceof Array){var n=!0,o=!1,s=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var r=a.value;this.playingNotes.push({outputId:e,noteName:r,channel:i})}}catch(e){o=!0,s=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw s}}}else this.playingNotes.push({outputId:e,noteName:t,channel:i})}},{key:"_removeEntryFromAry",value:function(e,t,i){for(var n=this.playingNotes.length-1;n>=0;n--){var o=this.playingNotes[n].noteName===t&&this.playingNotes[n].outputId===e;(o&&!Boolean(i)||o&&this.playingNotes[n].channel===i)&&this.playingNotes.splice(n,1)}}}]),e}());y.playingNotes=[];var N=i("c62b"),I=function(){function e(){Object(m["a"])(this,e)}return Object(b["a"])(e,null,[{key:"connect",value:function(){var e=this;return new Promise(function(t,i){e.webMidi.enable(function(n){e.isConnected=!0,t(),n&&i(n)},e.sysex)})}},{key:"addControlchangeListener",value:function(e,t,i){var n=this.webMidi.getInputById(e.toString());n.addListener("controlchange",i,t)}},{key:"removeControlchangeListener",value:function(e,t){var i=this.webMidi.getInputById(e.toString());i.removeListener("controlchange",t)}},{key:"sendControlChange",value:function(e,t,i,n,o){var s=this.webMidi.getOutputById(e.toString());s.sendControlChange(t,i,n,o)}},{key:"playNotes",value:function(e,t,i,n){var o=this.webMidi.getOutputById(e.toString());o.playNote(t,i,n),y.addEntriesToAry(e,t,i)}},{key:"sendPitchBend",value:function(e,t,i){var n=this.webMidi.getOutputById(e.toString());n.sendPitchBend(t,i)}},{key:"stopNote",value:function(e,t,i,n){var o=this.webMidi.getOutputById(e.toString());o.stopNote(t,i,n),y.removeEntriesFromAry(e,t,i)}},{key:"getMidiOutputs",value:function(){return this.webMidi.outputs.map(function(e){return{id:e.id,name:e.name}})}},{key:"getMidiInputs",value:function(){return this.webMidi.inputs.map(function(e){return{id:e.id,name:e.name}})}}]),e}();I.webMidi=N,I.playingNotes=y.playingNotes,I.sysex=!0,I.isConnected=!1;i("84b4");var M=127;function w(e){e.data[1]===B.receiveFromCcChannel&&B.receiveFromDeviceId===e.target.id&&_.setVolume(e.data[2]),e.data[1]===O.receiveFromCcChannel&&O.receiveFromDeviceId===e.target.id&&_.setPitch(e.data[2]);var t=32,i=O.receiveFromCcChannel+t;e.data[1]===i&&O.receiveFromDeviceId===e.target.id&&_.setLsbPitch(e.data[2])}var T=function(){function e(t,i,n){Object(m["a"])(this,e),this.noteCurrentllyPlayingTimeStamp=0,this.current14BitLsbPitchPosition=0,this.lastVolumeCcSent=0,this.pitchPositionWhenNoteStarted=0,this.isVcvMode=!1,this.midiSequence=new x,this.ccpitch=new V,this.midiVolumeSlider=t,this.midiPitchSlider=i,this.outputId=n,this.currentPitchPosition=i.startCcPosition,this.currentVolumePosition=t.startCcPosition}return Object(b["a"])(e,[{key:"setLsbPitch",value:function(e){this.current14BitLsbPitchPosition=e}},{key:"_sendVcvPitchBend",value:function(){var e=M/2,t=(this.currentPitchPosition-e)/e;this.sendPitchBend(this.outputId,t,this.sendToChannel)}},{key:"setVolume",value:function(e){if(this.currentVolumePosition=e,this.midiVolumeSlider.reverseCcPosition&&(e=this.midiVolumeSlider.endCcPosition-e),e>this.midiVolumeSlider.triggerPlayAbouve&&!Boolean(this.noteCurrentllyPlayingTimeStamp)){if(this.isVcvMode)this._sendVcvPitchBend(),this.midiPitchSlider.setMidiCurrentNotePlayingByPosition(this.midiPitchSlider.vcvDefaultNotePlaying),this.playNotes(this.midiPitchSlider.midiCurrentNotePlaying);else if(this.sendPitchBend(this.outputId,0,this.sendToChannel),this.midiSequence.isActive){if(!this.midiSequence.getIsLastCordRotationInCustomScale()){this.pitchPositionWhenNoteStarted=this.currentPitchPosition;var t=this.midiSequence.playCurrentNotes(this.outputId,this.currentPitchPosition,this.currentPitchPosition,this.midiPitchSlider.getPosisionsPerNote(),this.sendToChannel);t&&this.playNotes(t)}}else this.midiPitchSlider.setMidiCurrentNotePlayingByPosition(this.currentPitchPosition),this.playNotes(this.midiPitchSlider.midiCurrentNotePlaying);this.noteCurrentllyPlayingTimeStamp=(new Date).getTime()}else if(e<this.midiVolumeSlider.triggerStopBelow&&Boolean(this.noteCurrentllyPlayingTimeStamp))this.midiSequence.isActive?(this.midiSequence.stopCurrentNotes(this.outputId,this.sendToChannel),this.midiSequence.incrementIndex()):I.stopNote(this.outputId,this.midiPitchSlider.midiCurrentNotePlaying,this.sendToChannel),this.sendVolumeControlChange(this.midiVolumeSlider.sendToResetVal),this.noteCurrentllyPlayingTimeStamp=0;else if(this.noteCurrentllyPlayingTimeStamp){var i=this.midiPitchSlider.getPitchBendPosition(this.currentPitchPosition);if(this.midiSequence.isActive){var n=this.pitchPositionWhenNoteStarted;this.midiSequence.getIsCustomeScale()&&(n=this.midiSequence.currentPositionInScalePlaying),i=this.midiPitchSlider.getPitchBendRelativeToNoteStartedPosition(this.currentPitchPosition,this.midiSequence.bendRangeInMemitons,n)}var o=(new Date).getTime()-this.noteCurrentllyPlayingTimeStamp;o>this.midiPitchSlider.ignorePitchbendChangeInMillisecondsAfterNewNote&&(isNaN(i)||this.sendPitchBend(this.outputId,i,this.sendToChannel)),o>this.midiVolumeSlider.ignoreVolumeChangeInMillisecondsAfterNewNote&&this.sendVolumeControlChange(this.midiVolumeSlider.getSendToVal(e))}}},{key:"setPitch",value:function(e){if(e+=1/M*this.current14BitLsbPitchPosition/M,this.midiPitchSlider.reverseCcPosition&&(e=this.midiPitchSlider.endCcPosition-e),this.currentPitchPosition=e,this.isVcvMode)this.setVolume(this.currentVolumePosition);else{var t=!this.isVcvMode&&Math.abs(this.midiPitchSlider.getNewNoteToPlay(e)-this.midiPitchSlider.midiCurrentNotePlaying)>this.midiPitchSlider.semitonsAutoTrigerNote&&Boolean(this.noteCurrentllyPlayingTimeStamp)&&!this.midiSequence.isActive;if(t){var i=this.midiPitchSlider.midiCurrentNotePlaying;this.midiPitchSlider.setMidiCurrentNotePlayingByPosition(this.currentPitchPosition),this.playNotes(this.midiPitchSlider.midiCurrentNotePlaying),I.stopNote(this.outputId,i,this.sendToChannel)}if(this.midiSequence.isActive&&this.midiSequence.sequenceCordsAsCustomScale&&Boolean(this.noteCurrentllyPlayingTimeStamp)){var n=this.midiSequence.playCurrentNotes(this.outputId,this.currentPitchPosition,this.pitchPositionWhenNoteStarted,this.midiPitchSlider.getPosisionsPerNote(),this.sendToChannel);n&&this.playNotes(n)}this.setVolume(this.currentVolumePosition)}}},{key:"sendVolumeControlChange",value:function(e){this.lastVolumeCcSent!==e&&I.sendControlChange(this.outputId,this.midiVolumeSlider.sendToCcChannel,e,this.sendToChannel),this.lastVolumeCcSent=e}},{key:"sendPitchBend",value:function(e,t,i){var n;this.ccpitch.isActive?(this.ccpitch.isPlayPitchAndCC&&I.sendPitchBend(e,t,i),n=t>=0?(this.ccpitch.positiveSendToMaxVal-this.ccpitch.positiveSendToMinVal)*t:(this.ccpitch.negativeSendToMaxVal-this.ccpitch.negativeSendToMinVal)*t,n=Math.abs(n),I.sendControlChange(this.outputId,this.ccpitch.sendToCcChannel,n,this.sendToChannel)):I.sendPitchBend(e,t,i)}},{key:"playNotes",value:function(e){I.playNotes(this.outputId,e,this.sendToChannel)}},{key:"startRouting",value:function(){I.addControlchangeListener(this.midiVolumeSlider.receiveFromDeviceId,w,this.receiveFromChannel)}},{key:"stopRouting",value:function(){I.removeControlchangeListener(this.midiVolumeSlider.receiveFromDeviceId,this.receiveFromChannel)}}]),e}(),V=function e(){Object(m["a"])(this,e),this.isActive=!0,this.isPlayPitchAndCC=!1,this.sendToCcChannel=1,this.negativeSendToMinVal=1,this.negativeSendToMaxVal=127,this.positiveSendToMinVal=1,this.positiveSendToMaxVal=127},x=function(){function e(){Object(m["a"])(this,e),this.isActive=!1,this.repeatSequence=!0,this.sequenceCordsAsCustomScale=!1,this.semitonsBetweenCustomScaleNotes=3,this.sequence=[],this.index=0,this.bendRangeInMemitons=12,this.currentNoteInScalePlaying=0,this.currentPositionInScalePlaying=0}return Object(b["a"])(e,[{key:"getIsLastCordRotationInCustomScale",value:function(){return this.getIsCustomeScale()&&this.index===this.sequence.length-1}},{key:"getIsCustomeScale",value:function(){var e=this.sequence[this.index];return e instanceof Array&&this.sequenceCordsAsCustomScale}},{key:"playCurrentNotes",value:function(e,t,i,n,o){var s=this.sequence[this.index],a=this.getIsCustomeScale(),c=s,r=0;if(a){var l=(t-i)/n;r=Math.trunc(l/this.semitonsBetweenCustomScaleNotes),r>s.length-1&&(r=s.length-1),c=s[r],this.currentNoteInScalePlaying===c?c=void 0:(t!==i&&this.stopCurrentNotes(e,o),this.currentNoteInScalePlaying=c,this.currentPositionInScalePlaying=t)}return c}},{key:"incrementIndex",value:function(){this.index<this.sequence.length-1?this.index++:this.repeatSequence&&(this.index=0)}},{key:"stopCurrentNotes",value:function(e,t){this.currentNoteInScalePlaying=0,this.currentPositionInScalePlaying=0;var i=this.sequence[this.index];i&&I.stopNote(e,this.sequence[this.index],t)}}]),e}(),k=function(){function e(){Object(m["a"])(this,e),this.triggerPlayAbouve=5,this.sendToResetVal=50,this.triggerStopBelow=5,this.ignoreVolumeChangeInMillisecondsAfterNewNote=80,this.startCcPosition=1,this.endCcPosition=127,this.reverseCcPosition=!1,this.isMuteAbouveEndCcPosition=!1,this.sendToCcChannel=7,this.sendToMinVal=1,this.sendToMaxVal=127,this.receiveFromDeviceId=0,this.receiveFromCcChannel=21}return Object(b["a"])(e,[{key:"getSendToVal",value:function(e){var t=(e-this.startCcPosition)/(this.endCcPosition-this.startCcPosition);return t=t>1&&this.isMuteAbouveEndCcPosition?0:t,t=t>1?1:t,t=t<0?0:t,Math.trunc(this.sendToMinVal+t*(this.sendToMaxVal-this.sendToMinVal))}}]),e}(),A=function(){function e(){Object(m["a"])(this,e),this.startCcPosition=1,this.endCcPosition=127,this.reverseCcPosition=!1,this.midiStartNote=50,this.midiEndNote=86,this.semitonPerOctaveBend=12,this.semitonsAutoTrigerNote=12,this.ignorePitchbendChangeInMillisecondsAfterNewNote=0,this.receiveFromDeviceId=0,this.receiveFromCcChannel=20,this.midiCurrentNotePlaying=this.midiEndNote,this.vcvDefaultNotePlaying=43}return Object(b["a"])(e,[{key:"MidiSlider",value:function(){}},{key:"setMidiCurrentNotePlayingByPosition",value:function(e){return this.midiCurrentNotePlaying=this.getNewNoteToPlay(e),this.midiCurrentNotePlaying}},{key:"getPitchBendRelativeToNoteStartedPosition",value:function(e,t,i){var n=i,o=(e-n)/n,s=o*(t/this.semitonPerOctaveBend);return s>1?1:s<-1?-1:s%1}},{key:"getPosisionsPerNote",value:function(){return(this.endCcPosition-this.startCcPosition)/(this.midiEndNote-this.midiStartNote)}},{key:"getPitchBendPosition",value:function(e){var t=this.getPosisionsPerNote(),i=t*this.semitonPerOctaveBend,n=this.startCcPosition+(this.midiCurrentNotePlaying-this.midiStartNote)*t,o=e-n,s=o/i;return s>1?1:s<-1?-1:s%1}},{key:"getNewNoteToPlay",value:function(e){var t=this.getPosisionsPerNote(),i=(e-this.startCcPosition)/t;return this.midiStartNote+Math.trunc(i)}}]),e}(),O=new A,B=new k,_=new T(B,O,0),q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("label",{staticClass:"w3-text-grey"},[e._v(e._s(e.name))]),i("input",{staticClass:"w3-input w3-border",attrs:{type:"number"},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})])},j=[],E=function(e){function t(){return Object(m["a"])(this,t),Object(p["a"])(this,Object(C["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(P["c"]);S["a"]([Object(P["b"])(String)],E.prototype,"name",void 0),S["a"]([Object(P["b"])(String)],E.prototype,"value",void 0),E=S["a"]([P["a"]],E);var W=E,R=W,F=Object(a["a"])(R,q,j,!1,null,null,null);F.options.__file="W3InputNumber.vue";var D=F.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("input",{staticClass:"w3-check",attrs:{type:"checkbox"},domProps:{checked:e.value},on:{input:function(t){e.$emit("input",t.target.checked)}}}),i("label",[e._v(e._s(e.name))])])},$=[],J=function(e){function t(){return Object(m["a"])(this,t),Object(p["a"])(this,Object(C["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(P["c"]);S["a"]([Object(P["b"])(String)],J.prototype,"name",void 0),S["a"]([Object(P["b"])(Boolean)],J.prototype,"value",void 0),J=S["a"]([P["a"]],J);var H=J,X=H,K=Object(a["a"])(X,L,$,!1,null,null,null);K.options.__file="W3Checkbox.vue";var z=K.exports,U=0,G="none",Q={id:U,name:G},Y=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(p["a"])(this,Object(C["a"])(t).apply(this,arguments)),e.msgConnected="",e.msgRouted="",e.jsonSequence=JSON.stringify([["C4","E4"],0,"D4","E4"]),e.seqModIsActive=!1,e.isVcvMode=!1,e.isRepeatSequence=!0,e.isSequenceCordsAsCustomScale=!1,e.semitonsBetweenCustomScaleNotes="3",e.sequenceModeMaxBendRange="12",e.volumeInputCC="21",e.pitchInputCC="20",e.ccpitchIsActive=!1,e.ccpitchIsPlayPitchAndCC=!1,e.ccpitchSendToCcChannel="1",e.ccpitchNegativeSendToMinVal="1",e.ccpitchNegativeSendToMaxVal="127",e.ccpitchPositiveSendToMinVal="1",e.ccpitchPositiveSendToMaxVal="127",e.playingNotes=[],e.midiOutputs=[Q],e.midiOutput=U,e.midiInputs=[Q],e.midiInput=U,e.receiveFromChannel="0",e.sendToChannel="0",e.pitchBendPosition="0",e.midiSliderPosition="64",e.thereminVolumePosition="0",e.thereminPitchPosition="64",e.volumeTriggerPlayAbouve="5",e.volumeTriggerStopBelow="5",e.volumeSendToResetVal="50",e.volumeIgnoreVolumeChangeInMillisecondsAfterNewNote="80",e.volumeSendToCcChannel="7",e.volumeStartCcPosition="1",e.volumeEndCcPosition="127",e.volumeSendToMinVal="1",e.volumeSendToMaxVal="127",e.volumeIsMuteAbouveEndCcPosition=!1,e.pitchSemitonPerOctaveBend="12",e.pitchSemitonsAutoTrigerNote="12",e.pitchIgnorePitchbendChangeInMillisecondsAfterNewNote="0",e.pitchMidiStartNote="50",e.pitchMidiEndNote="86",e.pitchStartCcPosition="1",e.pitchEndCcPosition="127",e}return Object(b["a"])(t,[{key:"doStartVolumeRouting",value:function(){_.outputId=this.midiOutput,_.midiVolumeSlider.receiveFromDeviceId=this.midiInput,_.midiVolumeSlider.receiveFromCcChannel=Number(this.volumeInputCC),_.receiveFromChannel=0===Number(this.receiveFromChannel)?void 0:Number(this.receiveFromChannel),_.sendToChannel=0===Number(this.sendToChannel)?void 0:Number(this.sendToChannel),_.midiSequence.isActive=this.seqModIsActive,_.midiSequence.index=0,_.isVcvMode=this.isVcvMode,_.midiSequence.repeatSequence=this.isRepeatSequence,_.midiSequence.sequenceCordsAsCustomScale=this.isSequenceCordsAsCustomScale,_.midiSequence.semitonsBetweenCustomScaleNotes=Number(this.semitonsBetweenCustomScaleNotes),_.midiSequence.sequence=JSON.parse(this.jsonSequence),_.midiSequence.bendRangeInMemitons=Number(this.sequenceModeMaxBendRange),_.ccpitch.isActive=this.ccpitchIsActive,_.ccpitch.isPlayPitchAndCC=this.ccpitchIsPlayPitchAndCC,_.ccpitch.sendToCcChannel=Number(this.ccpitchSendToCcChannel),_.ccpitch.negativeSendToMinVal=Number(this.ccpitchNegativeSendToMinVal),_.ccpitch.negativeSendToMaxVal=Number(this.ccpitchNegativeSendToMaxVal),_.ccpitch.positiveSendToMinVal=Number(this.ccpitchPositiveSendToMinVal),_.ccpitch.positiveSendToMaxVal=Number(this.ccpitchPositiveSendToMaxVal),_.midiVolumeSlider.triggerPlayAbouve=Number(this.volumeTriggerPlayAbouve),_.midiVolumeSlider.triggerStopBelow=Number(this.volumeTriggerStopBelow),_.midiVolumeSlider.sendToResetVal=Number(this.volumeSendToResetVal),_.midiVolumeSlider.ignoreVolumeChangeInMillisecondsAfterNewNote=Number(this.volumeIgnoreVolumeChangeInMillisecondsAfterNewNote),_.midiVolumeSlider.sendToCcChannel=Number(this.volumeSendToCcChannel);var e=Number(this.volumeStartCcPosition),t=Number(this.volumeEndCcPosition);t<e?(_.midiVolumeSlider.startCcPosition=t,_.midiVolumeSlider.endCcPosition=e,_.midiVolumeSlider.reverseCcPosition=!0):(_.midiVolumeSlider.startCcPosition=e,_.midiVolumeSlider.endCcPosition=t,_.midiVolumeSlider.reverseCcPosition=!1),_.midiVolumeSlider.sendToMinVal=Number(this.volumeSendToMinVal),_.midiVolumeSlider.sendToMaxVal=Number(this.volumeSendToMaxVal),_.midiVolumeSlider.isMuteAbouveEndCcPosition=this.volumeIsMuteAbouveEndCcPosition,_.midiPitchSlider.receiveFromDeviceId=this.midiInput,_.midiPitchSlider.receiveFromCcChannel=Number(this.pitchInputCC),_.midiPitchSlider.semitonPerOctaveBend=Number(this.pitchSemitonPerOctaveBend),_.midiPitchSlider.semitonsAutoTrigerNote=Number(this.pitchSemitonsAutoTrigerNote),_.midiPitchSlider.ignorePitchbendChangeInMillisecondsAfterNewNote=Number(this.pitchIgnorePitchbendChangeInMillisecondsAfterNewNote),_.midiPitchSlider.midiStartNote=Number(this.pitchMidiStartNote),_.midiPitchSlider.midiEndNote=Number(this.pitchMidiEndNote);var i=Number(this.pitchStartCcPosition),n=Number(this.pitchEndCcPosition);n<i?(_.midiPitchSlider.startCcPosition=n,_.midiPitchSlider.endCcPosition=i,_.midiPitchSlider.reverseCcPosition=!0):(_.midiPitchSlider.startCcPosition=i,_.midiPitchSlider.endCcPosition=n,_.midiPitchSlider.reverseCcPosition=!1),_.startRouting(),this.msgRouted="Routing"}},{key:"doStopVolumeRouting",value:function(){_.stopRouting(),this.msgRouted=""}},{key:"doPitchVolumeSend",value:function(){_.outputId=this.midiOutput,_.setVolume(Number(this.thereminVolumePosition)),_.setPitch(Number(this.thereminPitchPosition))}},{key:"doPlayMidiSliderByBand",value:function(){var e=_.midiPitchSlider.getPitchBendPosition(Number(this.midiSliderPosition));I.sendPitchBend(this.midiOutput,e,void 0)}},{key:"doPlaySliderByNote",value:function(){_.midiPitchSlider.setMidiCurrentNotePlayingByPosition(Number(this.midiSliderPosition)),I.playNotes(this.midiOutput,_.midiPitchSlider.midiCurrentNotePlaying,void 0),this.playingNotes=I.playingNotes}},{key:"doStopSliderNote",value:function(){I.stopNote(this.midiOutput,_.midiPitchSlider.midiCurrentNotePlaying,void 0),I.sendPitchBend(this.midiOutput,Number(this.pitchBendPosition),void 0),this.playingNotes=I.playingNotes}},{key:"doStartC4",value:function(){I.playNotes(this.midiOutput,"C4",void 0),this.playingNotes=I.playingNotes}},{key:"doStopC4",value:function(){I.stopNote(this.midiOutput,"C4",void 0),this.playingNotes=I.playingNotes}},{key:"doPitchBend",value:function(){I.sendPitchBend(this.midiOutput,Number(this.pitchBendPosition),void 0)}},{key:"doConnect",value:function(){var e=this;I.connect().then(function(){e.msgConnected="Connected",e.midiOutputs=[Q].concat(I.getMidiOutputs()),e.midiInputs=[Q].concat(I.getMidiInputs())}).catch(function(t){e.msgConnected=t.message})}}]),Object(v["a"])(t,e),t}(P["c"]);Y=S["a"]([Object(P["a"])({components:{W3InputNumber:D,W3Checkbox:z}})],Y);var Z=Y,ee=Z,te=(i("fd25"),Object(a["a"])(ee,g,f,!1,null,"96a74708",null));te.options.__file="HelloWorld.vue";var ie=te.exports,ne=function(e){function t(){return Object(m["a"])(this,t),Object(p["a"])(this,Object(C["a"])(t).apply(this,arguments))}return Object(v["a"])(t,e),t}(P["c"]);ne=S["a"]([Object(P["a"])({components:{HelloWorld:ie}})],ne);var oe=ne,se=oe,ae=Object(a["a"])(se,d,h,!1,null,null,null);ae.options.__file="Home.vue";var ce=ae.exports;n["default"].use(u["a"]);var re=new u["a"]({mode:"history",base:"/theremini-online/",routes:[{path:"/",name:"home",component:ce},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),le=i("2f62");n["default"].use(le["a"]);var ue=new le["a"].Store({state:{},mutations:{},actions:{}}),de=i("9483");Object(de["a"])("".concat("/theremini-online/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["default"].config.productionTip=!1,new n["default"]({router:re,store:ue,render:function(e){return e(l)}}).$mount("#app")},e5e7:function(e,t,i){},fd25:function(e,t,i){"use strict";var n=i("e5e7"),o=i.n(n);o.a}});
//# sourceMappingURL=app.ffe5d19c.js.map