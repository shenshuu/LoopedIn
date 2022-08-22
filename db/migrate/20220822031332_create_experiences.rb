class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.integer :user_id, null: false
      t.string :company, null: false
      t.string :title, null: false
      t.string :employment_type
      t.string :location 
      t.date :start_date 
      t.date :end_date
      t.boolean :current_job, default: true 
      t.timestamps
    end
    add_index :experiences, :user_id
  end
end
