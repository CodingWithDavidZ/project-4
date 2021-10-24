puts "🌰...Seeding Database...🌰"


    5.times do
        user = User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
        username: Faker::Name.middle_name,
        password_digest: Faker::Blockchain::Bitcoin.address)
    end

    20.times do
        metric = Metric.create(
            chest_size: Faker::Number.decimal(l_digits: 2),
            waist_size: Faker::Number.decimal(l_digits: 2),
            hip_size: Faker::Number.decimal(l_digits: 2),
            thigh_size: Faker::Number.decimal(l_digits: 2),
            calf_size: Faker::Number.decimal(l_digits: 2),
            bicep_size: Faker::Number.decimal(l_digits: 2),
            forearm_size: Faker::Number.decimal(l_digits: 2),
            forearm_size: Faker::Number.decimal(l_digits: 2),
            height_feet: Faker::Number.between(from: 4, to: 7),
            height_inches: Faker::Number.between(from: 1, to: 11),
            weight_lbs: Faker::Number.decimal(l_digits: 3, r_digits: 2),
            user_id: Faker::Number.between(from: 1, to: 5)
            )
    end



puts "🌱🌱🌱 Seeding Complete 🌱🌱🌱"