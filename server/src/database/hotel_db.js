export const restaurantes = {
  Ember: { tipo: "Carne", capacidad: 3 },
  Zao: { tipo: "Japonés", capacidad: 4 },
  Grappa: { tipo: "Italiano", capacidad: 2 },
  Larimar: { tipo: "Mariscos", capacidad: 3 }
};

export const horarios = ["6-8 PM", "8-10 PM"];

export const reservaciones = {
  "6-8 PM": { Ember: [], Zao: [], Grappa: [], Larimar: [] },
  "8-10 PM": { Ember: [], Zao: [], Grappa: [], Larimar: [] }
};