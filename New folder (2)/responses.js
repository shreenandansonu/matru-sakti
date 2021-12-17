function getBotResponse(input) {

    x=input.toLowerCase()
    first=x.split(" ")
    var keywards = ['pregnancy','pregnant','weight','food','period','pain','exercises','fit'];

    var common = first.filter(x => keywards.indexOf(x) !== -1)

    // keyward pregnancy
    if (common == "pregnancy") {
        return "•How to avoid pregnancy? •What is pregnancy? •What to eat during pregnancy? •How to do pregnancy test? •Spotting during early pregnancy? •When do pregnancy craving start? •Is sex safe during pregnancy? •What are the signs of unhealthy pregnancy? •Optimum weight gain during pregnancy?";
    }
    if(x=='what is pregnancy?'){
        return"Pregnancy, also known as gestation, is the time during which one or more offspring develops inside a woman. A multiple pregnancy involves more than one offspring, such as with twins. Pregnancy usually occurs by sexual intercourse, but can also occur through assisted reproductive technology procedures."
    }
    if (x == "is sex safe during pregnancy?") {
        return "You bet! Historically, sex has continued virtually unabated despite pregnancy. Only in the presence of a threatened miscarriage, placenta previa, and premature rupture of the membranes, threatened preterm labor, or preeclampsia can sex really be said to be contraindicated.";
    }
    if (x == "how to do pregnancy test?") {
        return "Take one tablespoon of sugar in a bowl and add one tablespoon of urine to it. Now notice how sugar reacts after you pour urine on it. If the sugar starts forming clumps, it means you are pregnant and if the sugar dissolves quickly, it means you are not pregnant.It's not accurate but works.";
    }
    if (x == "spotting during early pregnancy?") {
        return "Many women who spot during early pregnancy assume they have had a miscarriage, but that isn’t always the case. In fact, approximately 30 percent of women will spot in the first trimester and go on to have a healthy pregnancy. If you do notice spotting, notify your doctor just in case.";
    }
    if (x == "what to eat during pregnancy?") {
        return "When building your healthy eating plan, you’ll want to focus on whole foods that give you higher amounts of the good stuff you’d need when not pregnant such as:-protein -vitamins and minerals -healthy types of fat -complex carbohydrates -fiber and fluids";
    }
    if (x == "when do pregnancy craving start?") {
        return "There isn't a specific time when pregnancy food cravings start. It's different for every woman – and you may not necessarily have any cravings.If you do start having cravings, it'll probably be in your first trimester (it could be as early as 5 weeks into pregnancy). They'll get stronger in your second trimester, and then eventually stop in your third trimester.Cravings come in all shapes and sizes. Some women crave fatty foods like chips. Others get pregnancy cravings for things they didn't like before they got pregnant, or strange combinations of food such as mars bars with bacon.Try to eat as healthily as possible – keep those unhealthy temptations to a minimum!If you find yourself craving things that aren't food, like toothpaste, coal or even soil, speak to your midwife or doctor, as this may be a sign of a vitamin deficiency.";
    }
    if (x == "how to avoid pregnancy?") {
        return "Contraception can be used to prevent pregnancy and some types will also protect you from sexually transmissible infections (STIs). Partners can use -Condom -Oral Contraceptive Pill -Intrauterine Device -Diaphragm -Sterilisation";
    }
    if (x == "what are the signs of unhealthy pregnancy?") {
        return "DANGER SIGNS DURING PREGNANCY. vaginal bleeding. convulsions/fits. severe headaches with blurred vision. fever and too weak to get out of bed. severe abdominal pain. fast or difficult breathing.";
    }

    // keyward pregnant
    if (common == "pregnant") {
        return "•Why I am not geting pregnant? •How to get pregnant? •What is the right age to get pregnant? ";
    }
    if (x == "why I am not geting pregnant?") {
        return "There are many possible reasons, including ovulation irregularities, structural problems in the reproductive system, low sperm count, or an underlying medical problem. While infertility can have symptoms like irregular periods or severe menstrual cramps, the truth is that most causes of infertility are silent";
    }
    if (x == "how to get pregnant?") {
        return "Understanding when you're ovulating — and having sex regularly five days before and on the day of ovulation — can improve the odds of conceiving.";
    }
    if (x == "what is the right age to get pregnant?") {
        return "Experts say the best time to get pregnant is between your late 20s and early 30s. This age range is associated with the best outcomes for both you and your baby. One study pinpointed the ideal age to give birth to a first child as 30.";
    }

    // keyward weight
    if (common == "weight") {
        return "•How much weight should I gain in pregnancy? •Why not to be under weight? •Why not to be over weight? •Optimum weight gain during pregnancy? •Optimum weight gain during pregnancy with multiple baby?";
    }
    if(x=='how much weight should I gain in pregnancy?'){
        return"Weight gain in pregnancy varies from person to person. It also depends on your weight before you become pregnant.Most pregnant women gain between 10kg and 12.5kg (22lb to 26lb), putting on most of the weight after week 20. Much of the extra weight is due to your baby growing, but your body will also be storing fat, ready to make breast milk after your baby is born.Putting on too much or too little weight while you're pregnant can lead to health problems for you or your unborn baby. But don't worry, it's easy to make healthy food choices. Find out what to eat when pregnant and what foods to avoid."
    }
    if (x == "why not to be under weight?") {
        return "If you're underweight before pregnancy, it's essential to gain a reasonable amount of weight while you're pregnant. Without the extra weight, your baby might be born smaller than expected.";
    }
    if (x == "why not to be over weight?") {
        return "Being overweight before pregnancy increases the risk of various pregnancy complications, including gestational diabetes, high blood pressure disorders of pregnancy, such as preeclampsia, and the need for a C-section.Work with your health care provider to determine what's best in your case and to manage your weight throughout pregnancy.";
    }
    if (x == "optimum weight gain during pregnancy?") {
        return "Being overweight before pregnancy increases the risk of various pregnancy complications, including gestational diabetes, high blood pressure disorders of pregnancy, such as preeclampsia, and the need for a C-section.Work with your health care provider to determine what's best in your case and to manage your weight throughout pregnancy.Reffer to BMI index.Underweight (BMI under 18.5) 28 to 40 lbs. (about 13 to 18 kg) | Normal weight (BMI 18.5 to 24.9) 25 to 35 lbs. (about 11 to 16 kg) | Overweight (BMI 25 to 29.9) 15 to 25 lbs. (about 7 to 11 kg) | Obesity (BMI 30 or more)11 to 20 lbs. (about 5 to 9 kg)";
    }
    if (x == "optimum weight gain during pregnancy with multiple baby?") {
        return "When you're carrying twins or other multiples If you're carrying twins or other multiples, you'll likely need to gain more weight. Again, work with your health care provider to determine what's right for you.Consider these general guidelines for pregnancy weight gain if you're carrying twins:Normal weight (BMI 18.5 to 24.9) 37 to 54 lbs. (about 17 to 25 kg) Overweight (BMI 25 to 29.9) 31 to 50 lbs. (about 14 to 23 kg) Obesity (BMI 30 or more) 25 to 42 lbs. (about 11 to 19 kg)";
    }
// keyward food
if (common == "food") {
    return "•What food to avoid? •How many times to eat? •What food should I eat in pregnancy? •Tips for healthy breakfast?";
}
if(x=='what food to avoid?'){
    return"There are certain foods that you should avoid while you're pregnant as they can put your baby's health at risk. These include some types of cheese and raw or undercooked meat. Mould-ripened soft cheeses with a white coating on the outside, such as brie, camembert and chèvre (unless cooked until steaming hot) soft blue cheeses such as danish blue,gorgonzola and roquefort (unless cooked until steaming hot) any unpasteurised cows' milk, goats' milk or sheep's milk any foods made from unpasteurised milk, such as soft goats' cheese raw or undercooked meat liver and liver products all types of pâté, including vegetarian pâté game meats such as goose, partridge or pheasant."
}
if (x == "how many times to eat?") {
    return "Being pregnant, you'll obviously be more hungry than usual, but even if you are expecting twins or more, you don't need to eat extra portions. In the final 3 months of your pregnancy, you'll need an extra 200 calories a day – that's the same as 2 slices of wholemeal toast and margarine.";
}
if (x == "what food should I eat in pregnancy?") {
    return "Fruit and vegetables, Starchy foods (carbohydrates),Protein,Dairy products ";
}
if (x == "tips for healthy breakfast?") {
    return "Spinach-cheese egg scramble,Ginger blueberry whole wheat pancakes,milk bread,upama";
}
  // keyward period
if (common == "period") {
    return "•Why is my period late? •How long is the average period length? •Can I get pregnant during periods? •Why are my period cramps so painful?";
}
if(x=='why is my period late?'){
    return"There are several reasons why your period might be late: You might be pregnant. If you think this could be the case, you can take a home pregnancy test or see your doctor to check. However, several other factors can cause late or even missed periods, for example medication, stress, diet, or exercise."
}
if (x == "how long is the average period length?") {
    return "The time from the first sign of blood to the last is usually in the 3-to-5-day range. It’s common for cycles to be a little irregular for a few years after your first period. This means your periods may not always come at the same time every cycle, and they may be a bit different from one month to the next. Don’t worry, as you progress through adolescence, your cycles will become more regular and start to reflect adult cycle ranges, but they may still be a bit variable.";
}
if (x == "can i get pregnant during periods?") {
    return "Yes - during monthly bleeding the chances of pregnancy are low but not zero. Bleeding itself does not prevent pregnancy, and it does not promote pregnancy, either. In the first several days of monthly bleeding, the chances of pregnancy are lowest. As the days pass, the chances of pregnancy increase, whether or not she is still bleeding. The risk of pregnancy rises until ovulation. The day after ovulation the chances of pregnancy begin to drop steadily. Some fertility awareness methods that depend on cervical secretions advise avoiding unprotected sex during monthly bleeding because cervical secretions cannot be detected during bleeding and there is a small risk of ovulation at this time.";
}
if (x == "why are my period cramps so painful?") {
    return "Painful period cramps could be caused by heavy menstrual bleeding, which often affects you to take part in everyday life around your period. Or they could be caused by endometriosis. In this painful condition, the cells or tissue lining the uterus, grow outside the uterus. You should see your doctor who can do a blood test and get your history to help you get better. Some hormonal contraceptives are registered for women or girls with heavy menstrual bleeding who also need contraception";
}

// keyward exercises
if (common == "exercise") {
    return "•Exercise during pregnancy? •What exercises to avoid? •Can I get pregnant during periods? ";
}
if (common == "fit") {
    return "•Exercise during pregnancy? •What exercises to avoid? •Can I get pregnant during periods? ";
}
if(x=='exercise during pregnancy?'){
    return"Stomach-strengthening exercises | Pelvic tilt exercises | Pelvic floor exercises"
}
if (x == "What exercises to avoid?") {
    return "do not lie flat on your back for long periods, particularly after 16 weeks, because the weight of your bump presses on the main blood vessel bringing blood back to your heart and this can make you feel faint do not take part in contact sports where there's a risk of being hit, such as kickboxing, judo or squash do not go scuba diving, because the baby has no protection against decompression sickness and gas embolism (gas bubbles in the bloodstream)do not exercise at heights over 2,500m above sea level – this is because you and your baby are at risk of altitude sickness";
}
    // keyward pain
    if (common == "period") {
        return " •Why are my period cramps so painful? •When should I worry about pain during pregnancy? •What all pains are normal during pregnancy? •Does pain during pregnancy affect the baby?";
    }

    if (x == "why are my period cramps so painful?") {
        return "Painful period cramps could be caused by heavy menstrual bleeding, which often affects you to take part in everyday life around your period. Or they could be caused by endometriosis. In this painful condition, the cells or tissue lining the uterus, grow outside the uterus. You should see your doctor who can do a blood test and get your history to help you get better. Some hormonal contraceptives are registered for women or girls with heavy menstrual bleeding who also need contraception";
    }
    if (x == "when should I worry about pain during pregnancy?") {
        return "Image result for pain during pregnancy faq Even though mild cramps are a normal part of pregnancy, you should still talk to your doctor about your discomfort. If you begin to see spotting or bleeding along with your cramps, it could be a sign of miscarriage or an ectopic pregnancy.";
    }
    if (x == "what all pains are normal during pregnancy?") {
        return "Image result for pain during pregnancy faq Even though mild cramps are a normal part of pregnancy, you should still talk to your doctor about your discomfort. If you begin to see spotting or bleeding along with your cramps, it could be a sign of miscarriage or an ectopic pregnancy.";
    }
    if (x == "does pain during pregnancy affect the baby?") {
        return "A study from the Centers for Disease Control and Prevention (CDC) found that women who took NSAIDs and opioid pain medicines during early pregnancy were more likely to have babies affected with certain birth defects compared with women who took acetaminophen.";
    }
}