// * Happy Friday daily_programmer *

// Completing yesterdays challenge should be helpful in solving todays.Write a function that lists out all 25 possible solutions to a Cesar Cipher(thats what we made yesterday) and the coresponding shift. 

// * For those of you looking to stretch your legs, use(https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json) as a resource of words and put likely solutions first.

//     ```
// decodeCipher('lnbja lryqna')
// =>
// [
//   9,    cesar cipher
//   22,	prfne pvcure
//   24,	npdlc ntaspc
//   23,	oqemd oubtqd
//   21,	qsgof qwdvsf
//   20,	rthpg rxewtg
//   18,	tvjri tzgyvi
//   19,	suiqh syfxuh
//   7,	eguct ekrjgt
//   8,	dftbs djqifs
//   5,	giwev gmtliv
//   17,	uwksj uahzwj
//   25,	mockb mszrob
//   16,	vxltk vbiaxk
//   13,	yaown yeldan
//   6,	fhvdu flskhu
//   10,	bdrzq bhogdq
//   11,	acqyp agnfcp
//   3,	ikygx iovnkx
//   2,	jlzhy jpwoly
//   4,	hjxfw hnumjw
//   14,	xznvm xdkczm
//   15,	wymul wcjbyl
//   1,	kmaiz kqxpmz
//   12,	zbpxo zfmebo
// ] 
// ```

// * Please DM me or Richie with ideas for future problems or future themed weeks.When you have completed it post a link to your solution.*
// *if you have a question about someones solution please use a thread under their posted link.*

const shiftLetter = (character, location) => {
    if (character === ' ') { return character.charCodeAt() }
    let shiftedValue = character.charCodeAt() + location
    return shiftedValue = shiftedValue <= 122 ? shiftedValue : shiftedValue - 26
}

const decodeCipher = (str) => {
    let arrayOfNewCharMaps = [...Array(26)].map((_, shift) => (
        [...str].map((letter) => shiftLetter(letter, shift))
    ))
    
    return arrayOfNewCharMaps.map((grouping, shift) => (
        `${shift}, ${grouping.map(number => String.fromCharCode(number)).join('')}`
    ))
}

console.log(decodeCipher('lnbja lryqna'))