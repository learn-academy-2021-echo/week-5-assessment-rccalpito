# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN


require 'rspec'

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
letter_t = 't'

# describe 'word_arrayometer' do

#     it 'takes in an array of words and a single letter and returns all the words that contain that particular letter' do
#         expect(word_arrayometer(beverages_array, letter_o)).to eq ['coffee', 'soda water']
#         expect(word_arrayometer(beverages_array, letter_t)).to eq ['tea', 'water', 'soda water']
#     end
# end

# Expected output: ['coffee', 'soda water']
# Expected output: ['tea', 'water', 'soda water']

def word_arrayometer (array, letter)
    newArr = []
    array.map do |value|
        if value.include? letter
            newArr.push(value)
        end
    end
    return newArr
end

p (word_arrayometer(beverages_array, letter_t))


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

def sum (array)
    array.sum
end

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

p sum(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
# because we are calling all methods from this class, we do not need to set attr_accessor
# model will be user generated, and current initial speed set to 0 for all bikes (variables in initialize are instance variable parameters that are required to be provided)
    def initialize (model, current_speed = 0)
        @wheels = 2
        @current_speed = current_speed
        @model = model

    end
# string interpolate the sentence 
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
# define pedal faster method, that will require the parameter acceleration
# set current speed to current speed + acceleration
    def pedal_faster (acceleration)
       @acceleration = acceleration
       @current_speed += @acceleration
    end
# for brake method, need to require parameter decelleration
# ruby needs return for the last line, last line to return the current speed, otherwise it returns nil (because last thing returned is false from the if statement)

    def brake (decelleration)
        @decelleration = decelleration
        @current_speed -= decelleration
        if @current_speed < 0 
            @current_speed = 0
        else 
            @current_speed
        end
    end
end

p my_bike = Bike.new('trek')

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
# p my_bike = Bike.new('trek')
p my_bike.pedal_faster(5)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)

