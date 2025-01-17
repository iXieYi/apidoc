/*
 * apidoc
 * https://apidocjs.com
 *
 * Authors:
 * Peter Rottmann <rottmann@inveris.de>
 * Nicolas CARPi @ Deltablot
 * Copyright (c) 2013 inveris OHG
 * Licensed under the MIT license.
 */
import { ca } from './ca.mjs';
import { cs } from './cs.mjs';
import { de } from'./de.mjs';
import { es } from'./es.mjs';
import { fr } from './fr.mjs';
import { it } from'./it.mjs';
import { nl } from'./nl.mjs';
import { pl } from'./pl.mjs';
import { pt_br } from'./pt_br.mjs';
import { ro } from'./ro.mjs';
import { ru } from'./ru.mjs';
import { tr } from'./tr.mjs';
import { vi } from'./vi.mjs';
import { zh } from'./zh.mjs';
import { zh_cn } from'./zh_cn.mjs';

const locales = {
  ca: ca,
  cs: cs,
  de: de,
  es: es,
  en: {},
  fr: fr,
  it: it,
  nl: nl,
  pl: pl,
  pt: pt_br,
  ro: ro,
  ru: ru,
  tr: tr,
  vi: vi,
  zh: zh,
};

// e.g. en fr pl
export const lang = (window.navigator.language ?? 'en-GB').toLowerCase().substr(0, 2);

export let locale = locales[lang] ? locales[lang] : locales.en;

export function __ (text) {
  const index = locale[text];
  if (index === undefined) { return text; }
  return index;
}

export function setLanguage (language) {
  locale = locales[language];
}
