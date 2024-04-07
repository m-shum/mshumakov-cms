const hiddenDocTypes = (listItem) =>
  ![
    'project',
    'projectsArray',
    'journalEntry',
    'journalEntriesArray',
    'media.tag',
  ].includes(listItem.getId())

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Index Page Projects')
        .child(
          S.editor()
            .id('projectsArray')
            .documentId('projectsArray')
            .schemaType('projectsArray')
        ),
      S.listItem()
        .title('Projects Library')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects Library')),
      S.listItem()
        .title('Journal Entries')
        .schemaType('journalEntry')
        .child(S.documentTypeList('journalEntry').title('Journal Entries')),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
