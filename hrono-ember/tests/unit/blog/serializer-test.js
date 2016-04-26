import { moduleForModel, test } from 'ember-qunit';

moduleForModel('blog', 'Unit | Serializer | blog', {
  // Specify the other units that are required for this test.
  needs: ['serializer:blog']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
