# UNO-GAME-PROJECT

## LINKS
- [Description](#Description)
- [Abstract](#ABSTRACT)
- [Introduction](#INTRODUCTION)
- [Abstract](#ABSTRACT)
- [Literature review](#LITERATURE-REVIEW)
- [Problem statement](#PROBLEM-STATEMENT)
- [Requirement analysis](#REQUIREMENT-ANALYSIS)
- [Implementation](#IMPLEMENTATION)
- [Standards adopted](#STANDARDS-ADOPTED)
- [Conclusion](#CONCLUSION-AND-FUTURE-SCOPE)

## Description

This is a group minor project on ***ONLINE UNO GAME*** submitted to ***KIIT UNIVERSITY*** by:

1. [**Aditi Rai**](https://github.com/aditirai2306)
2. [**Anushka Gupta**](https://github.com/anushkagupta1027)
3. [**Mudit Jain**](https://github.com/mudit-jain01)
4. [**Swagnik Das**](https://github.com/swagthehooman)

## ABSTRACT
The world of online gaming system is evolving at a rapid rate. With people more attracted to arcade and video style games, simple card games like uno and pokemon are losing its charm. This is primarily because of its offline style gaming nature. So, in this project, the objective is to build an online card game web app, where the users will be able to team up and play card games in realtime. Users will be able to create their own groups and play these old school games in online mode, from anywhere they wish.

## INTRODUCTION
In the current scenario, there are no free **UNO** gaming sites present on web. People who wish to play UNO game but are restricted by physical unavailability, face great issue in this case. For simple leisure time, its not possible for people to come together and play card games like old days. This game aims to build an online UNO gaming system where users will be able to play in groups formed online and they can also chat with each other more interactive gaming experience. 

### Keywords
Multiplayer, Online, ReactJS, Animation, Database, NodeJS


## LITERATURE REVIEW

## PROBLEM STATEMENT
The objective is to build an online card game web app, where the users will be able to team up and play card games in realtime. Users will be able to create their own groups and play the game in online mode. The users will also be able to chat within the playing group for more interactive gameplay. Users will be given multiple hints and also timer based play for making things interesting.

## REQUIREMENT ANALYSIS

### Project planning

The Software Development Life Cycle model to be followed is Prototype Model. The user requirements are required to be understood, analyzed and customer feedback is required for development of gameplay experience. The project is one of its kind so there will be risks which are required to be identified and mitigated. The user requirements are:
1. Choice of lobby.
2. Timed game play.
3. Mutliplayer game with in game chat.
4. Game play hints.

After the requirements are understood and the System requirements and specification is completed, prototype will be build for customer evaluation and acceptance. Post completion of this phase, the system design and coding will begin. The system testing will be done, focusing on white box testing, integration testing and acceptance testing. Post completion of this phase, maintanence of the system will carry on.

### Project analysis/ System requirements and specification

1. REQ 1: Private lobby creation.
      Description: The users will be able to choose if they want to play with their friends or with unknown people.
        
        R.1.1: Private room creation.
        Input: Private button press event.
        Output: Lobby page containing multiple user (upto 6) and the code for joining the room will be displayed.
        Processing: A code will be generated for players which can be shared for joining will be able to join (upto 6).
        
        R.1.2: Creation of private room code.
        Input: Create button press event.
        Output: Lobby code creation and display the code in the page.
        Processing: Fixed length random code generation.
        
        R.1.3: Joining of private room code.
        Input: Join button press event.
        Output: Private lobby join page.
        
2. REQ 2: Game play hints
       Description: The users will be provided with multiple hints during game play.
       
          R.2.1: Player turn.
          Input: Users will play their cards.
          Output: A turn arrow animation will be displayed.
          Processing: Depending on the card played, the turn will be decided.
          
          R.2.2: Card color play hints.
          Input: Top card from played card stack.
          Output: The screen color should change.
          Processing: The color of card on top of stack will be used to change display color.
          
          R.2.3: Uno call.
          Input: Size of the card stack.
          Output: Uno pop up animation on the Uno call button.
          Processing: If the user has 1 card left to play, the uno button animation will start.
          
          R.2.4: Automatic card play.
          Input: The turn timer expires.
          Output: A card is played from the user's side automatically.
          Processing: Match the card on played stack with the user's card stack and play the matching one. 
          
3. REQ 3: Timed gameplay.
       Description: The users will have to play their cards in a limited time frame.
       
          R.3.1: Timer diplay.
          Input: Turn of the user gets activated.
          Output: Time left animation on the dp of the player.
          
4. REQ 4: In game chatting.
       Description: The users will be able to chat with each other during the game.
       
          R.4.1: Chat message.
          Input: Chat button select event.
          Output: The chat platform is displayed.
          Processing: Chatting using socket.

### System design

## IMPLEMENTATION

### Methodolgy/ Proposal
### Testing
### Result analysis
### Quality assurance

## STANDARDS ADOPTED

### Design standards
### Coding standards
### Testing standards


## CONCLUSION AND FUTURE SCOPE

### Conclusion
### Future scope
