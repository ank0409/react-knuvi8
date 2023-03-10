const data = [
  {
    id: 1,
    category_name: 'Forms and Inputs',
    name_definition: 'some definition about Forms and Inputs',
    search_tags: ['tag', 'another tag to be searched for', 'special'],
    tags: [
      {
        id: 1,
        tag_name: 'Input',
        syntax: 'input',
        tag_name_description: 'Defines an HTML form for user input',
        default_value: 'some default value here aabbcc',
        browser_support: ['Chrome', 'IE', 'browser support'],
        tips_notes: 'placeholder space for adding some notes',
        global_attributes: 'True',
        event_attributes: 'True',
        default_css_setting: 'None',
        opening_tag: '<input>',
        closing_tag: 'false',
        value_input_required: 'false',
        atts_required: 'true',
        tag_attributes: [
          {
            att: 'autocomplete',
            att_value: ['on', 'off'],
            att_description: 'attributes description',
          },
          {
            att: 'formmethod',
            att_value: ['get', 'post'],
            att_description: 'attributes description',
          },
          {
            att: 'disabled',
            att_value: ['diabled'],
            att_description: 'attributes description',
          },
          {
            att: 'alt',
            att_value: ['text'],
            att_description: 'attributes description',
          },
        ],
      },
      {
        id: 2,
        tag_name: 'Textarea',
        syntax: 'textarea',
        tag_name_description: 'Defines an input control',
        default_value: 'some default value here',
        browser_support: ['Chrome', 'IE'],
        tips_notes: 'placeholder space for adding some notes',
        global_attributes: 'True',
        event_attributes: 'True',
        default_css_setting: 'None',
        opening_tag: '<textarea>',
        closing_tag: 'true',
        value_input_required: 'false',
        atts_required: 'true',
        tag_attributes: [
          {
            att: 'max',
            att_value: ['number', 'date'],
            att_description: 'attributes description',
          },
          {
            att: 'src',
            att_value: ['URL'],
            att_description: 'attributes description',
          },
          {
            att: 'value',
            att_value: ['text'],
            att_description: 'attributes description',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category_name: 'Formatting',
    name_definition: 'something about Formatting',
    search_tags: ['second', 'speciality'],
    tags: [
      {
        id: 1,
        tag_name: 'Heading One',
        syntax: 'h1',
        tag_name_description: 'Defines an HTML form for user input',
        default_value: 'unique',
        browser_support: ['Chrome', 'IE'],
        tips_notes: 'placeholder space for adding some notes',
        global_attributes: 'True',
        event_attributes: 'True',
        default_css_setting: 'None',
        opening_tag: '<h1>',
        closing_tag: 'true',
        value_input_required: 'false',
        atts_required: 'false',
        tag_attributes: ['false'],
      },
      {
        id: 2,
        tag_name: 'Paragraph',
        syntax: 'p',
        tag_name_description: 'Defines an input control',
        default_value: 'some default value here',
        browser_support: ['Chrome', 'IE'],
        tips_notes: 'placeholder space for adding some notes',
        global_attributes: 'True',
        event_attributes: 'True',
        default_css_setting: 'None',
        opening_tag: '<p>',
        closing_tag: 'true',
        value_input_required: 'false',
        atts_required: 'false',
        tag_attributes: ['false'],
      },
    ],
  },
];

export default data;
