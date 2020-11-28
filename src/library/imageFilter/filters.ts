/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
import * as brightnessAdj from './brightnessAdjs'
import * as colourTints from './colourTints'
import * as lineGen from './lineGenerators'
import * as offsets from './offsetFilters'
import * as noiseGen from './noiseGenerators'
import * as specksGen from './specksGenerators'




export enum EFilterType {
    a,                  // brightnessAdj.a
    darkify,            // brightnessAdj.darkifyImgData
    incbrightness,      // brightnessAdj.incbrightnessImgData
    incbrightness2,     // brightnessAdj.incbrightnessTwoImgData
    invert,             // brightnessAdj.invertImgData
    pixelBlue,          // brightnessAdj.pixelBlueImgData
    satAdj,             // brightnessAdj.satAdjImgData
    ocean,              // colourTints.oceanImgData
    vintage,            // colourTints.vintageImgData
    perfume,            // colourTints.perfumeImgData
    serenity,           // colourTints.serenityImgData
    warmth,             // colourTints.warmth
    neue,               // colourTints.neueImgData
    sunset,             // colourTints.sunset
    wood,               // colourTints.wood
    lix,                // colourTints.lixConv
    ryo,                // colourTints.ryoConv
    bluescale,          // colourTints.blueGreyscaleImgData
    solange,            // colourTints.solangeImgData
    evening,            // colourTints.eveningImgData
    crimson,            // colourTints.crimson
    coral,              // colourTints.coralImgData
    pinkAura,           // colourTints.pinkAuraImgData
    haze,               // colourTints.hazeImgData
    coolTwilight,       // colourTints.coolTwilightImgData
    blues,              // colourTints.bluesImgData
    horizon,            // colourTints.horizonImgData
    mellow,             // colourTints.mellowImgData
    solangeDark,        // colourTints.solangeDarkImgData
    solangeGrey,        // colourTints.solangeGreyImgData
    zapt,               // colourTints.zaptImgData
    eon,                // colourTints.eonImgData
    aeon,               // colourTints.aeonImgData
    phase,              // colourTints.phase
    lemon,              // colourTints.lemonImgData
    frontward,          // colourTints.frontwardImgData
    purplescale,        // colourTints.purplescaleImgData
    radio,              // colourTints.radioImgData
    twenties,           // colourTints.twentiesImgData
    greyscale,          // colourTints.greyscaleImgData
    grime,              // colourTints.grime
    redgreyscale,       // colourTints.redgreyscaleImgData
    greengreyscale,     // colourTints.greengreyscaleImgData
    rosetint,           // colourTints.rosetintImgData
    greenDiagonalLines, // lineGen.addGreenDiagonalLinesImgData
    diagonalLines,      // lineGen.addDiagonalLinesImgData
    horizontalLines,    // lineGen.addHorizontalLineImgData
    extremeOffsetBlue,  // offsets.extremeOffsetBlue
    extremeOffsetGreen, // offsets.extremeOffsetGreen
    offsetGreen,        // offsets.offsetGreenImgData
    extraOffsetBlue,    // offsets.extraOffsetBlue
    extraOffsetRed,     // offsets.extraOffsetRed
    extraOffsetGreen,   // offsets.extraOffsetGreen
    offset,             // offsets.offset
    offsetBlue,         // offsets.offsetBlueImgData
    extremeOffsetRed,   // offsets.extremeOffsetRed
    tealMinNoise,       // noiseGen.tealMinNoiseImgData
    darkPurpleMinNoise, // noiseGen.darkPurpleMinNoiseImgData
    pinkMinNoise,       // noiseGen.pinkMinNoiseImgData
    matrix,             // noiseGen.matrixImgData
    cosmic,             // noiseGen.cosmicImgData
    minNoise,           // noiseGen.minNoiseImgData
    redMinNoise,        // noiseGen.redMinNoiseImgData
    matrix2,            // noiseGen.matrix2
    greenMedNoise,      // noiseGen.greenMedNoiseImgData
    greenMinNoise,      // noiseGen.greenMinNoiseImgData
    blueMinNoise,       // noiseGen.blueMinNoiseImgData
    purpleMinNoise,     // noiseGen.purpleMinNoiseImgData
    retroviolet,        // specksGen.retrovioletImgData
    yellowCasino,       // specksGen.yellowCasinoImgData
    specks,             // specksGen.specksImgData
    specksRedscale,     // specksGen.specksredscaleImgData
    eclectic,           // specksGen.eclecticImgData
    greenSpecks,        // specksGen.greenSpecksImgData
    casino,             // specksGen.casinoImgData
}

export function applyFilter (filter:EFilterType, imageData: ImageData):ImageData {

  switch (filter) {
    case EFilterType.a:
      return brightnessAdj.a(imageData)
    case EFilterType.darkify:
      return brightnessAdj.darkifyImgData(imageData)
    case EFilterType.incbrightness:
      return brightnessAdj.incbrightnessImgData(imageData)
    case EFilterType.incbrightness2:
      return brightnessAdj.incbrightnessTwoImgData(imageData)
    case EFilterType.invert:
      return brightnessAdj.invertImgData(imageData)
    case EFilterType.pixelBlue:
      return  brightnessAdj.pixelBlueImgData(imageData)
    case EFilterType.satAdj:
      return brightnessAdj.satAdjImgData(imageData)
    case EFilterType.ocean:
      return colourTints.oceanImgData(imageData)
    case EFilterType.vintage:
      return colourTints.vintageImgData(imageData)
    case EFilterType.perfume:
      return colourTints.perfumeImgData(imageData)
    case EFilterType.serenity:
      return colourTints.serenityImgData(imageData)
    case EFilterType.warmth:
      return colourTints.warmth(imageData)
    case EFilterType.neue:
      return colourTints.neueImgData(imageData)
    case EFilterType.sunset:
      return  colourTints.sunset(imageData)
    case EFilterType.wood:
      return  colourTints.wood(imageData)
    case EFilterType.lix:
      return colourTints.lixConv(imageData)
    case EFilterType.ryo:
      return colourTints.ryoConv(imageData)
    case EFilterType.bluescale:
      return colourTints.blueGreyscaleImgData(imageData)
    case EFilterType.solange:
      return colourTints.solangeImgData(imageData)
    case EFilterType.evening:
      return colourTints.eveningImgData(imageData)
    case EFilterType.crimson:
      return colourTints.crimson(imageData)
    case EFilterType.coral:
      return colourTints.coralImgData(imageData)
    case EFilterType.pinkAura:
      return colourTints.pinkAuraImgData(imageData)
    case EFilterType.haze:
      return colourTints.hazeImgData(imageData)
    case EFilterType.coolTwilight:
      return colourTints.coolTwilightImgData(imageData)
    case EFilterType.blues:
      return colourTints.bluesImgData(imageData)
    case EFilterType.horizon:
      return colourTints.horizonImgData(imageData)
    case EFilterType.mellow:
      return colourTints.mellowImgData(imageData)
    case EFilterType.solangeDark:
      return colourTints.solangeDarkImgData(imageData)
    case EFilterType.solangeGrey:
      return colourTints.solangeGreyImgData(imageData)
    case EFilterType.zapt:
      return colourTints.zaptImgData(imageData)
    case EFilterType.eon:
      return colourTints.eonImgData(imageData)
    case EFilterType.aeon:
      return colourTints.aeonImgData(imageData)
    case EFilterType.phase:
      return colourTints.phase(imageData)
    case EFilterType.lemon:
      return colourTints.lemonImgData(imageData)
    case EFilterType.frontward:
      return colourTints.frontwardImgData(imageData)
    case EFilterType.purplescale:
      return colourTints.purplescaleImgData(imageData)
    case EFilterType.radio:
      return colourTints.radioImgData(imageData)
    case EFilterType.twenties:
      return colourTints.twentiesImgData(imageData)
    case EFilterType.greyscale:
      return colourTints.greyscaleImgData(imageData)
    case EFilterType.grime:
      return colourTints.grime(imageData)
    case EFilterType.redgreyscale:
      return colourTints.redgreyscaleImgData(imageData)
    case EFilterType.greengreyscale:
      return colourTints.greengreyscaleImgData(imageData)
    case EFilterType.rosetint:
      return  colourTints.rosetintImgData(imageData)
    case EFilterType.greenDiagonalLines:
      return lineGen.addGreenDiagonalLinesImgData(imageData)
    case EFilterType.diagonalLines:
      return lineGen.addDiagonalLinesImgData(imageData)
    case EFilterType.horizontalLines:
      return lineGen.addHorizontalLineImgData(imageData)
    case EFilterType.extremeOffsetBlue:
      return offsets.extremeOffsetBlue(imageData)
    case EFilterType.extremeOffsetGreen:
      return offsets.extremeOffsetGreen(imageData)
    case EFilterType.offsetGreen:
      return offsets.offsetGreenImgData(imageData)
    case EFilterType.extraOffsetBlue:
      return offsets.extraOffsetBlue(imageData)
    case EFilterType.extraOffsetRed:
      return offsets.extraOffsetRed(imageData)
    case EFilterType.extraOffsetGreen:
      return offsets.extraOffsetGreen(imageData)
    case EFilterType.offset:
      return offsets.offset(imageData)
    case EFilterType.offsetBlue:
      return offsets.offsetBlueImgData(imageData)
    case EFilterType.extremeOffsetRed:
      return offsets.extremeOffsetRed(imageData)
    case EFilterType.tealMinNoise:
      return noiseGen.tealMinNoiseImgData(imageData)
    case EFilterType.darkPurpleMinNoise:
      return noiseGen.darkPurpleMinNoiseImgData(imageData)
    case EFilterType.pinkMinNoise:
      return  noiseGen.pinkMinNoiseImgData(imageData)
    case EFilterType.matrix:
      return  noiseGen.matrixImgData(imageData)
    case EFilterType.cosmic:
      return  noiseGen.cosmicImgData(imageData)
    case EFilterType.minNoise:
      return  noiseGen.minNoiseImgData(imageData)
    case EFilterType.redMinNoise:
      return  noiseGen.redMinNoiseImgData(imageData)
    case EFilterType.matrix2:
      return  noiseGen.matrix2(imageData)
    case EFilterType.greenMedNoise:
      return  noiseGen.greenmedNoiseImgData(imageData)
    case EFilterType.greenMinNoise:
      return  noiseGen.greenMinNoiseImgData(imageData)
    case EFilterType.blueMinNoise:
      return  noiseGen.blueMinNoiseImgData(imageData)
    case EFilterType.purpleMinNoise:
      return  noiseGen.purpleMinNoiseImgData(imageData)
    case EFilterType.retroviolet:
      return   specksGen.retrovioletImgData(imageData)
    case EFilterType.yellowCasino:
      return  specksGen.yellowCasinoImgData(imageData)
    case EFilterType.specks:
      return  specksGen.specksImgData(imageData)
    case EFilterType.specksRedscale:
      return  specksGen.specksredscaleImgData(imageData)
    case EFilterType.eclectic:
      return  specksGen.eclecticImgData(imageData)
    case EFilterType.greenSpecks:
      return  specksGen.greenSpecksImgData(imageData)
    case EFilterType.casino:
      return  specksGen.casinoImgData(imageData)
  }
}

export const FilterCatalog = {
  brightnessAdj:[
    EFilterType.a,                  // brightnessAdj.a
    EFilterType.darkify,            // brightnessAdj.darkifyImgData
    EFilterType.incbrightness,      // brightnessAdj.incbrightnessImgData
    EFilterType.incbrightness2,     // brightnessAdj.incbrightnessTwoImgData
    EFilterType.invert,             // brightnessAdj.invertImgData
    EFilterType.pixelBlue,          // brightnessAdj.pixelBlueImgData
    EFilterType.satAdj,             // brightnessAdj.satAdjImgData
  ],
  colourTints:[
    EFilterType.ocean,              // colourTints.oceanImgData
    EFilterType.vintage,            // colourTints.vintageImgData
    EFilterType.perfume,            // colourTints.perfumeImgData
    EFilterType.serenity,           // colourTints.serenityImgData
    EFilterType.warmth,             // colourTints.warmth
    EFilterType.neue,               // colourTints.neueImgData
    EFilterType.sunset,             // colourTints.sunset
    EFilterType.wood,               // colourTints.wood
    EFilterType.lix,                // colourTints.lixConv
    EFilterType.ryo,                // colourTints.ryoConv
    EFilterType.bluescale,          // colourTints.blueGreyscaleImgData
    EFilterType.solange,            // colourTints.solangeImgData
    EFilterType.evening,            // colourTints.eveningImgData
    EFilterType.crimson,            // colourTints.crimson
    EFilterType.coral,              // colourTints.coralImgData
    EFilterType.pinkAura,           // colourTints.pinkAuraImgData
    EFilterType.haze,               // colourTints.hazeImgData
    EFilterType.coolTwilight,       // colourTints.coolTwilightImgData
    EFilterType.blues,              // colourTints.bluesImgData
    EFilterType.horizon,            // colourTints.horizonImgData
    EFilterType.mellow,             // colourTints.mellowImgData
    EFilterType.solangeDark,        // colourTints.solangeDarkImgData
    EFilterType.solangeGrey,        // colourTints.solangeGreyImgData
    EFilterType.zapt,               // colourTints.zaptImgData
    EFilterType.eon,                // colourTints.eonImgData
    EFilterType.aeon,               // colourTints.aeonImgData
    EFilterType.phase,              // colourTints.phase
    EFilterType.lemon,              // colourTints.lemonImgData
    EFilterType.frontward,          // colourTints.frontwardImgData
    EFilterType.purplescale,        // colourTints.purplescaleImgData
    EFilterType.radio,              // colourTints.radioImgData
    EFilterType.twenties,           // colourTints.twentiesImgData
    EFilterType.greyscale,          // colourTints.greyscaleImgData
    EFilterType.grime,              // colourTints.grime
    EFilterType.redgreyscale,       // colourTints.redgreyscaleImgData
    EFilterType.greengreyscale,     // colourTints.greengreyscaleImgData
    EFilterType.rosetint,           // colourTints.rosetintImgData
  ],
  lineGen:[
    EFilterType.greenDiagonalLines, // lineGen.addGreenDiagonalLinesImgData
    EFilterType.diagonalLines,      // lineGen.addDiagonalLinesImgData
    EFilterType.horizontalLines,    // lineGen.addHorizontalLineImgData    
  ],
  offsets:[
    EFilterType.extremeOffsetBlue,  // offsets.extremeOffsetBlue
    EFilterType.extremeOffsetGreen, // offsets.extremeOffsetGreen
    EFilterType.offsetGreen,        // offsets.offsetGreenImgData
    EFilterType.extraOffsetBlue,    // offsets.extraOffsetBlue
    EFilterType.extraOffsetRed,     // offsets.extraOffsetRed
    EFilterType.extraOffsetGreen,   // offsets.extraOffsetGreen
    EFilterType.offset,             // offsets.offset
    EFilterType.offsetBlue,         // offsets.offsetBlueImgData
    EFilterType.extremeOffsetRed,   // offsets.extremeOffsetRed
  ],
  noiseGen:[
    EFilterType.tealMinNoise,       // noiseGen.tealMinNoiseImgData
    EFilterType.darkPurpleMinNoise, // noiseGen.darkPurpleMinNoiseImgData
    EFilterType.pinkMinNoise,       // noiseGen.pinkMinNoiseImgData
    EFilterType.matrix,             // noiseGen.matrixImgData
    EFilterType.cosmic,             // noiseGen.cosmicImgData
    EFilterType.minNoise,           // noiseGen.minNoiseImgData
    EFilterType.redMinNoise,        // noiseGen.redMinNoiseImgData
    EFilterType.matrix2,            // noiseGen.matrix2
    EFilterType.greenMedNoise,      // noiseGen.greenMedNoiseImgData
    EFilterType.greenMinNoise,      // noiseGen.greenMinNoiseImgData
    EFilterType.blueMinNoise,       // noiseGen.blueMinNoiseImgData
    EFilterType.purpleMinNoise,     // noiseGen.purpleMinNoiseImgData
  ],
  specksGen:[
    EFilterType.retroviolet,        // specksGen.retrovioletImgData
    EFilterType.yellowCasino,       // specksGen.yellowCasinoImgData
    EFilterType.specks,             // specksGen.specksImgData
    EFilterType.specksRedscale,     // specksGen.specksredscaleImgData
    EFilterType.eclectic,           // specksGen.eclecticImgData
    EFilterType.greenSpecks,        // specksGen.greenSpecksImgData
    EFilterType.casino,             // specksGen.casinoImgData
  ],
}
