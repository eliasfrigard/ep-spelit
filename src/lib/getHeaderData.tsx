import { createClient } from "contentful"

export const getHeaderData = async () => {
  const contentful = createClient({
    space: process.env.SPACE_ID || '',
    accessToken: process.env.ACCESS_TOKEN || '',
  })

  const websiteRes = await contentful.getEntries({
    content_type: 'websiteInformation',
  })

  const loiskeetRes = await contentful.getEntries({
    content_type: 'event',
    'fields.eventType': 'loiskeet',
    select: ['fields.title', 'fields.eventDescription', 'fields.programDescription', 'fields.infoDescription', 'fields.artistDescription', 'fields.eventPageTitle', 'fields.programPageTitle', 'fields.infoPageTitle', 'fields.artistPageTitle', 'fields.applicationPageTitle', 'fields.applicationPageDescription'],
  })

  const spelitRes = await contentful.getEntries({
    content_type: 'event',
    'fields.eventType': 'spelit',
    select: ['fields.title', 'fields.eventDescription', 'fields.programDescription', 'fields.infoDescription', 'fields.artistDescription', 'fields.eventPageTitle', 'fields.programPageTitle', 'fields.infoPageTitle', 'fields.artistPageTitle', 'fields.applicationPageTitle', 'fields.applicationPageDescription'],
  })

  const contactRes = await contentful.getEntries({
    content_type: 'contactPage',
    select: ['fields.title'],
  })

  const musicRes = await contentful.getEntries({
    content_type: 'musicPage',
    select: ['fields.title'],
  })

  const homeRes = await contentful.getEntries({
    content_type: 'homePage',
    select: ['fields.pageTitle'],
  })

  const boardRes = await contentful.getEntries({
    content_type: 'hallitus',
    select: ['fields.title'],
  })

  const historyRes = await contentful.getEntries({
    content_type: 'historyPage',
    select: ['fields.title'],
  })

  return {
    websiteInformation: websiteRes.items[0].fields,
    loiskeet: loiskeetRes.items[0].fields,
    spelit: spelitRes.items[0].fields,
    contact: contactRes.items[0].fields,
    music: musicRes.items[0].fields,
    home: homeRes.items[0].fields,
    board: boardRes.items[0].fields,
    history: historyRes.items[0].fields,
  }
}
