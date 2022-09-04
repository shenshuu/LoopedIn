class CreateConnects < ActiveRecord::Migration[5.2]
  def change
    create_table :connects do |t|
      t.integer :user1_id, null: false,
      t.integer :user2_id, null: false,
      t.timestamps
    end
  end
end
