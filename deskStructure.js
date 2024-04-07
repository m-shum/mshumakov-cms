const hiddenDocTypes = (listItem) =>
  !['project', 'projectsArray', 'media.tag'].includes(listItem.getId())

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
        .title('Library')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Library')),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
