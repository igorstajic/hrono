import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  date: attr('string'),
  author: attr('string'),
  content: attr('string'),
  shortContent: attr('string'),
  quote: attr('string'),
});
