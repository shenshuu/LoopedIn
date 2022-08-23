class UpdateEducation < ActiveRecord::Migration[5.2]
  def change
    remove_column :educations, :end_date
    add_column :educations, :end_date, :date
    add_column :educations, :degree, :string
  end
end
