/* =====================================================================
   CONFIGURACIÓN DEL SITIO  ·  Este es el ÚNICO archivo que necesitas
   editar para actualizar eventos, horarios y enlaces.
   ---------------------------------------------------------------------
   - Fechas:  'AAAA-MM-DD'      Horas: 'HH:MM' (24 h, hora de Chile)
   - Días de reunión: 0=Domingo 1=Lunes 2=Martes 3=Miércoles
                      4=Jueves 5=Viernes 6=Sábado
   - Un evento vencido se oculta solo; no hay que borrarlo a mano.
   - Para probar una fecha: abre index.html?ahora=2026-09-05T15:30
===================================================================== */
const CONFIG = {
  zonaHoraria: 'America/Santiago',

  iglesia: {
    nombre: 'Gracia & Vida',
    direccion: 'Pedro Fontova 7492',
    comuna: 'Huechuraba, Santiago',
    // Enlace corto de Google Maps de la iglesia
    mapsUrl: 'https://maps.app.goo.gl/X1B42V2HqRagSYYw5',
    // Número con código de país, sin +, espacios ni guiones. Ej: '56912345678'.
    // Déjalo vacío ('') y el botón de WhatsApp no se muestra.
    whatsapp: '',
    whatsappMensaje: 'Hola, quisiera más información sobre la iglesia.'
  },

  /* ---------- EVENTOS (puedes dejar varios; se muestra el próximo) ---------- */
  eventos: [
    {
      id: 'casa-de-oracion-2026-09',
      titulo: 'Casa de Oración',
      fecha: '2026-09-05',
      inicio: '10:00',
      fin: '22:00',
      descripcion: 'Un día completo de intercesión, adoración y búsqueda de Dios. 6 bloques temáticos con propósito espiritual.',
      bloques: [
        { inicio: '10:00', fin: '12:00', nombre: 'Hambre por Dios y Consagración' },
        { inicio: '12:00', fin: '14:00', nombre: 'Avivamiento y Espíritu Santo' },
        { inicio: '14:00', fin: '16:00', nombre: 'Nuestra Iglesia y sus Líderes' },
        { inicio: '16:00', fin: '18:00', nombre: 'Familias, Necesidades y Provisión' },
        { inicio: '18:00', fin: '20:00', nombre: 'Salvación, Ciudad y Nación' },
        { inicio: '20:00', fin: '22:00', nombre: 'Palabra, Misión y Expansión' }
      ]
    }
    /* Plantilla para un nuevo evento (copia, pega arriba y edita):
    ,{
      id: 'nombre-unico',
      titulo: 'Título del evento',
      fecha: '2026-11-14',
      inicio: '19:00',
      fin: '21:00',
      descripcion: 'Texto corto.',
      bloques: []          // opcional
    }
    */
  ],

  /* ---------- REUNIONES SEMANALES ---------- */
  reuniones: [
    { dia: 2, hora: '08:00', nombre: 'Oración Matutina' },
    { dia: 2, hora: '20:00', nombre: 'Estudio Bíblico' },
    { dia: 3, hora: '20:00', nombre: 'Intercesión' },
    { dia: 4, hora: '08:00', nombre: 'Oración Matutina' },
    { dia: 4, hora: '20:00', nombre: 'Alabanza & Oración' },
    { dia: 6, hora: '17:30', nombre: 'Generación Juvenil' },
    { dia: 0, hora: '10:00', nombre: 'Corazones Dispuestos' },
    { dia: 0, hora: '10:30', nombre: 'Reunión General' }
  ],

  /* ---------- SECCIONES DE ENLACES ----------
     icono: youtube | instagram | facebook | spotify | check | heart |
            shield | book | chat | calendar
     { tipo: 'mapa' } coloca aquí el mapa de "Cómo llegar".            */
  secciones: [
    {
      titulo: 'Primeros pasos',
      links: [
        { icono: 'check', color: '#4ADE80', nombre: '¿Eres nuevo?', desc: 'Cuéntanos sobre ti y únete',
          url: 'https://form.jotform.com/261258061202648' },
        // CORREGIDO: antes terminaba en ?edit_requested=true#responses (enlace del panel de respuestas)
        { icono: 'heart', color: '#F87171', nombre: 'Necesito oración', desc: 'Comparte tu petición con la comunidad',
          url: 'https://docs.google.com/forms/d/1UCP_1vgFgGMFL2QSnV1nhkYwYe7S9mEPgV4MDkt9waY/viewform' }
      ]
    },
    { tipo: 'mapa' },
    {
      titulo: 'Comunidad',
      links: [
        { icono: 'youtube', color: '#FF4444', nombre: 'YouTube', desc: 'Sermones, alabanza y más',
          url: 'https://www.youtube.com/@GRACIA_Y_VIDA_HUECHURABA' },
        { icono: 'instagram', color: '#E1306C', nombre: 'Instagram', desc: 'Síguenos en Instagram',
          url: 'https://www.instagram.com/graciayvidahuechuraba.cl?igsh=cnpvMXlucm43aXhw' },
        { icono: 'facebook', color: '#4F9EF8', nombre: 'Facebook', desc: 'Página oficial de la iglesia',
          url: 'https://www.facebook.com/share/18aqEVG3B1/' },
        { icono: 'spotify', color: '#1ED760', nombre: 'Spotify', desc: 'Playlist de alabanza',
          url: 'https://open.spotify.com/playlist/38sFbtGe1bW5tI4jdsbYHV?si=4_HRLQFpStafLVU_vmqBkg' }
      ]
    },
    {
      titulo: 'Jóvenes',
      links: [
        { icono: 'instagram', color: '#C084FC', nombre: 'Jóvenes — Instagram', desc: 'Comunidad GJ Gracia & Vida',
          url: 'https://www.instagram.com/gj.graciayvida?igsh=MXZrMWhobDBpbnVobQ==' }
      ]
    },
    {
      titulo: 'Apoya el ministerio',
      links: [
        { icono: 'shield', color: '#60A5FA', nombre: 'Ofrenda / Diezmo', desc: 'Apoya el ministerio con tu ofrenda',
          url: 'https://fintoc.me/gyvhuechuraba' }
      ]
    },
    {
      titulo: 'Biblia & Estudio',
      links: [
        { icono: 'book', color: '#FF6B35', nombre: 'Encuéntranos en YouVersion', desc: 'Sigue a Gracia & Vida en la app Bíblica',
          url: 'https://www.bible.com/organizations/706bf395-5e04-4e0c-b4c3-69cebb35e56a?utm_source=yvapp&utm_medium=share&utm_content=partner-profile' }
      ]
    }
  ]
};
