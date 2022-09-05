class CreateConnects < ActiveRecord::Migration[5.2]
  def change
    create_table :connects do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.boolean :pending, default: false
      t.boolean :accepted, default: false 
      t.timestamps
    end
    add_index :connects, :sender_id
    add_index :connects, :receiver_id
  end
end
