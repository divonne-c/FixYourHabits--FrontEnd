import habitColorFunction from "../../helpers/habitcolors";
import habitLogoFunction from "../../helpers/habitlogos";
import GetDiscoverHabitTemplate from "../../components/habits/habit - get/GetDiscoverHabitTemplate";
import { Container } from "../../components/habits/habit - filter/HabitTypeFilter.styles";

const DiscoverAllContent = ({ filteredHabits, adminHabits }) => {
  return (
    <>
      <Container>
        <div className="discover-all">
          {adminHabits &&
            filteredHabits &&
            filteredHabits.map((habit) => {
              const habitColor = habitColorFunction(habit.type);
              const habitLogo = habitLogoFunction(habit.type);

              return (
                <div key={habit.id}>
                  <GetDiscoverHabitTemplate
                    habit={habit}
                    habitLogo={habitLogo}
                    habitColor={habitColor}
                  />
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default DiscoverAllContent;
