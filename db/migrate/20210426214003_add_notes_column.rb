class AddNotesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column(:notes, :note, :string)
  end
end
