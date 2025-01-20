import { Images } from "@/assets/images";
import { Colors } from "@/config/Colors";

export const promoData = [
    {
        id: '1',
        badge: 'Cashback up to 50%',
        text: 'Get food',
        color: Colors.error,
        image:Images.food,
    },
    {
        id: '2',
        badge: 'Up to 85% off',
        text: 'Book a ride',
        color: Colors.button.primary,
        image: Images.ride,
    },
    {
        id: '3',
        badge: 'Starts at $5',
        text: 'Book a car',
        color: Colors.button.primary,
        image: Images.car,
    },
    {
        id: '4',
        badge: 'FREE delivery on food',
        text: 'Budget eats',
        color: Colors.error,
        image: Images.budget,
    },
];