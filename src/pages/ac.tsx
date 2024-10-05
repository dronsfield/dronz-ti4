import { removeLinks } from "@/scraping";
import React from "react";
import styled from "styled-components";

console.log(removeLinks);

const Container = styled.div`
  th:nth-child(5),
  td:nth-child(5) {
    display: none;
  }

  table {
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const acPage = () => {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>In Deck</th>
            <th>Play</th>
            <th>Effect</th>
            <th>Flavor Text</th>
          </tr>
          <tr>
            <td>
              <b>Ancient Burial Sites</b>
            </td>
            <td>1</td>
            <td>At the start of the agenda phase:</td>
            <td>
              Choose 1 player. Exhaust each cultural planet owned by that
              player.
            </td>
            <td>
              <i>
                The images depicted a race that Rin had never seen before.
                Curious. Could it be that this was a race that was exterminated
                by the Lazax?
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Assassinate Representative</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>Choose 1 player. That player cannot vote on this agenda.</td>
            <td>
              <i>
                With a sickening crunch of bone and metal, unit.desgn.FLAYESH
                extracted its stinger from the blood-drenched skull of the
                Jol-Nar councilor.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bribery</b>
            </td>
            <td>1</td>
            <td>After the speaker votes on an agenda:</td>
            <td>
              Spend any number of trade goods. For each trade good spent, cast 1
              additional vote for the outcome on which you voted.
            </td>
            <td>
              <i>
                "We think that this initiative would spell disaster for the
                galaxy, not just the Creuss." Taivra said, quietly slipping Z'eu
                an envelope. "Don't you agree?"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Bunker</b>
            </td>
            <td>1</td>
            <td>At the start of an invasion:</td>
            <td>
              <p>
                During this invasion, apply -4 to the result of each Bombardment
                roll against planets you control.
              </p>
            </td>
            <td>
              <i>
                Elder Junn crossed his arms and steadied his breathing. The
                bombs could not reach them, not this far down. At least, that is
                what the soldiers had told him.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Confusing Legal Text</b>
            </td>
            <td>1</td>
            <td>When you are elected as the outcome of an agenda:</td>
            <td>
              <p>Choose 1 player. That player is the elected player instead.</p>
            </td>
            <td>
              <i>
                Somehow, even after the Council had adjourned, none of them were
                any closer to understanding the strange and confusing events of
                the day.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Construction Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              <p>
                You cannot vote on this agenda. Predict aloud an outcome of this
                agenda. If your prediction is correct, place 1 space dock from
                your reinforcements on a planet you control.
              </p>
            </td>
            <td>
              <i>
                The vote was nearly unanimous. The council would provide funding
                for the restoration. Ciel was furious.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Courageous to the End</b>
            </td>
            <td>1</td>
            <td>After 1 of your ships is destroyed during a space combat:</td>
            <td>
              <p>
                Roll 2 dice. For each result equal to or greater than that
                ship's combat value, your opponent must choose and destroy 1 of
                their ships.
              </p>
            </td>
            <td>
              <i>
                Coughing up blood and covered in burns, Havvat collapsed against
                the rapidly overheating ship core. She smiled. She would be
                remembered.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Cripple Defenses</b>
            </td>
            <td>1</td>
            <td>Action: Choose 1 planet.</td>
            <td>
              <p>Destroy each PDS on that planet.</p>
            </td>
            <td>
              <i>
                Titanic vines burst forth from the ground, wrapping themselves
                around the system's primary firing cylinder, breaking it free
                from its moorings, and bringing it crashing down upon the
                installation below.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Diplomacy Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              <p>
                You cannot vote on this agenda. Predict aloud an outcome of this
                agenda. If your prediction is correct, choose 1 system that
                contains a planet you control. Each other player places a
                command token from their reinforcements in that system.
              </p>
            </td>
            <td>
              <i>
                Ciel evaluated the other senators. Weak, all of them. This was
                his game to win.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Direct Hit</b>
            </td>
            <td>4</td>
            <td>
              After another player's ship uses Sustain Damage to cancel a hit
              produced by your units or abilities
            </td>
            <td>
              <p>Destroy that ship.</p>
            </td>
            <td>
              <i>
                (1) There it was! An opening! Neekuaq gestured wildly, a rare
                display for one normally quite reserved. "Fire the main
                battery!"(2) The Loncara Ssodu's main battery flared to life,
                firing a volley directly into the flickering starboard shield of
                the Letnev dreadnought.(3) For a moment, it looked as if the
                dreadnought's shield would hold, but a moment later, the ship
                began to come apart where the attack had pierced its hull.(4)
                Neekuaq watched, satisfied, as the ship was wracked by a series
                of explosions from within, huge armored plates and other debris
                hurtling off into the darkness.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Disable</b>
            </td>
            <td>1</td>
            <td>
              At the start of an invasion in a system that contains 1 or more of
              your opponents' PDS units:
            </td>
            <td>
              <p>
                Your opponents' PDS units lose Planetary Shield and Space Cannon
                during this invasion.
              </p>
            </td>
            <td>
              <i>
                "Ssruu has met their systems and fixed them." Ssruu dropped a
                handful of ripped wires and broken circuitry on the pedestal
                before Q'uesh Sish. "He will await his next task aboard his
                ship."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Distinguished Councilor</b>
            </td>
            <td>1</td>
            <td>After you cast votes on an outcome of an agenda:</td>
            <td>Cast 5 additional votes for that outcome.</td>
            <td>
              <i>
                Elder Junn was a wonder to behold. He knew the name of every
                senator, made small talk effortlessly, and commanded attention
                when he spoke. Magmus hated everything about him.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Economic Initiative</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>Ready each cultural planet you control.</td>
            <td>
              <i>
                Large sum of Hacan currency flowed freely into the project, and
                somehow, defying all logic, the returns were even greater.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Emergency Repairs</b>
            </td>
            <td>1</td>
            <td>At the start or end of a combat round:</td>
            <td>
              Repair all of your units that have Sustain Damage in the active
              system.
            </td>
            <td>
              <i>
                "What do you mean 'It's fine!?'" Dahla said, nearly tripping
                over a damaged bulkhead as the ship rocked from the explosive
                barrage.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Experimental Battlestation</b>
            </td>
            <td>1</td>
            <td>
              After another player moves ships into a system during a tactical
              action:
            </td>
            <td>
              Choose 1 of your space docks that is either in or adjacent to that
              system. That space dock uses Space Cannon 5 (x3) against ships in
              the active system.
            </td>
            <td>
              <i>
                "Arm the relay!" Mendosa bared his fangs. "The Saar will not
                submit!"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Fighter Prototype</b>
            </td>
            <td>1</td>
            <td>At the start of the first round of a space combat:</td>
            <td>
              Apply +2 to the result of each of your fighters' combat rolls
              during this combat round.
            </td>
            <td>
              <i>
                Suffi vaulted excitedly off the prototype's sleek, azure wing,
                landing effortlessly in its cockpit. "Let's see those damn
                snakes keep up with us now!"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Fire Team</b>
            </td>
            <td>1</td>
            <td>
              After your ground forces make combat rolls during a round of
              ground combat:
            </td>
            <td>Reroll any number of your dice.</td>
            <td>
              <i>
                Grinning, Jael spun towards the familiar noise of heavy boots
                hitting the ground. Backup had arrived.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Flank Speed</b>
            </td>
            <td>4</td>
            <td>After you activate a system:</td>
            <td>
              Apply +1 to the move value of each of your ships during this
              tactical action.
            </td>
            <td>
              <i>
                (1) Mendosa smirked. "Don't ye fret now, girl. It sounds like
                ye've got somewhere ta be in a hurry, and it just se happens
                that I ken get ye there right quick."(2) There was a low-pitched
                hum throughout the station and the gigantic, bulky constructions
                on the hull spat blue flame. Massive ion thrusters! So this was
                how the Saar moved the damned things.(3) Mendosa grinned at the
                young Mentak pilot's astonishment. "Mobility-the Clan's greatest
                strength. Ye'd be amazed at how fast this thing ken go."(4) With
                a sound like thunder and a flash of neon blue light, the
                thrusters accelerated full bore, nearly knocking Suffi off her
                feet.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Focused Research</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>Spend 4 trade goods to research 1 technology.</td>
            <td>
              <i>
                Stunned, Rin looked over the data, scarcely able to believe what
                he was seeing. It was nothing short of a major breakthrough. The
                Headmaster would be pleased.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Frontline Deployment</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Place 3 infantry from your reinforcements on 1 planet you control.
            </td>
            <td>
              <i>
                The soldiers poured fire on the writhing mass, but as each
                tendril vaporized, two more took its place. Panic wormed into
                the troopers' minds; was the creature growing?
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Ghost Ship</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Place 1 destroyer from your reinforcements in a non-home system
              that contains a wormhole and does not contain other players'
              ships.
            </td>
            <td>
              <i>
                Reports of Creuss vessels sighted in the area had surely been
                exaggerated. After all, the Creuss had no business this far from
                the Shaleri passage, and usually kept to themselves.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Imperial Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, gain 1 victory point.
            </td>
            <td>
              <i>
                In a sweeping victory that surprised absolutely no one, the
                Winnu representative singlehandedly elected himself to oversee
                the analysis of a recently uncovered Lazax data cache.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>In The Silence Of Space</b>
            </td>
            <td>1</td>
            <td>After you activate a system:</td>
            <td>
              Choose 1 system. During this tactical action, your ships in the
              chosen system can move through systems that contain other players'
              ships.
            </td>
            <td>
              <i>
                The Barony ships seemed to defy reality, bending light around
                them at impossible angles - naught but inky-black contours could
                be seen.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Industrial Initiative</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>Gain 1 trade good for each industrial planet you control.</td>
            <td>
              <i>
                The Gashlai reactors proved to be extremely effective. With the
                conversion rate practically doubled, the factories' output was
                immense.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Infiltrate</b>
            </td>
            <td>1</td>
            <td>When you gain control of a planet:</td>
            <td>
              Replace each PDS and space dock that is on that planet with a
              matching unit from your reinforcements.
            </td>
            <td>
              <i>
                The 1X had scarcely interfaced with the mainframe before it
                belonged to them completely.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Insubordination&nbsp;&nbsp;</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Remove 1 token from another player's tactic pool and return it to
              their reinforcements.
            </td>
            <td>
              <i>
                Kilik had never been particularly good at following orders. It
                only seemed natural to get paid for exercising that trait, as
                long as she didn't think to hard about where the money was
                coming from.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Intercept</b>
            </td>
            <td>1</td>
            <td>
              After your opponent declares a retreat during a space combat:
            </td>
            <td>
              Your opponent cannot retreat during this round of space combat.
            </td>
            <td>
              <i>
                The space before the fleeing ship shimmered and warped,
                revealing the bow of the Y'sia Yssrila bearing down on its
                position. There would be no escape today.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Leadership Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, gain 3 command tokens.
            </td>
            <td>
              <i>
                Rev's impassioned speech stunned the other councilors. Perhaps
                there was more to these humans than they had initially thought.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Lost Star Chart</b>
            </td>
            <td>1</td>
            <td>After you activate a system:</td>
            <td>
              During this tactical action, systems that contain alpha and beta
              wormholes are adjacent to each other.
            </td>
            <td>
              <i>
                The ship's sensors showed that the ancient star-map had somehow
                led them beyond the Mahact plateau.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Lucky Shot</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Destroy 1 dreadnought, cruiser, or destroyer in a system that
              contains a planet you control.
            </td>
            <td>
              <i>
                The missile - an insignificant spark against the darkness -
                struck the hull of the dreadnought. Moments later, the starboard
                flank erupted in flames.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Maneuvering Jets</b>
            </td>
            <td>4</td>
            <td>
              Before you assign hits produced by another player's Space Cannon
              roll:
            </td>
            <td>Cancel 1 hit.</td>
            <td>
              <i>
                (1) Something was wrong. T'esla sensed a flicker of movement on
                the planet's surface, followed by a faint glint of light.
                Reflexively, she veered her fighter to the side - an action that
                saved her life.(2) The fighter's thruster boosted her just out
                of the cannon's firing solution, and a metal slug the size of a
                building rocketed past her crystalline ship.(3) T'esla breathed
                a sigh of relief as the massive slug disappeared into the
                distance. A touch slower and she would have been annihilated.(4)
                The flickering red warning lights on her control panel reflected
                in her scales as she regained her composure. "Well," she said
                aloud. "Zat was close."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Mining Initiative&nbsp;</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Gain trade goods equal to the resource value of 1 planet you
              control.
            </td>
            <td>
              <i>
                To support its voracious war machine, the N'orr empire cracked
                the planet's crust and began mining its very core.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Morale Boost</b>
            </td>
            <td>4</td>
            <td>At the start of a combat round:</td>
            <td>
              Apply +1 to the result of each of your unit's combat rolls during
              this combat round.
            </td>
            <td>
              <i>
                (1) Harrugh stood before his warriors, searching for the words
                that would express the pride that swelled within him.(2) "We
                have done the impossible. I am proud to call you my brothers. My
                equals. My betters." Harrugh's whiskers bristled with energy as
                he spoke.(3) "Today we turn these invaders to ash and take back
                what is ours!" Harrugh paused, noting the murmurs of approval
                rippling through the ranks.(4) The whispering gradually died
                down and his warriors watched Harrugh expectantly. Every muscle
                in his body tensed, and he thrust his gyro-spear skyward. "For
                Kenara!"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Parley</b>
            </td>
            <td>1</td>
            <td>
              After another player commits units to land on a planet you
              control:
            </td>
            <td>Return the committed units to the space area.</td>
            <td>
              <i>
                The human admiral returned to his ship, struggling to remember
                precisely how his meeting with the Collective had gone.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Plague</b>
            </td>
            <td>1</td>
            <td>
              Action: Choose 1 planet that is controlled by another player.
            </td>
            <td>
              Roll 1 die for each infantry on that planet. For each result of 6
              or greater, destroy 1 of those units.
            </td>
            <td>
              <i>
                The letani dipped a mossy limb beneath the surface of the
                reservoir, feeling the flow of the particles within, shifting
                them, changing them into something different. Something
                dangerous.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Political Stability</b>
            </td>
            <td>1</td>
            <td>
              When you would return your strategy card(s) during the status
              phase:
            </td>
            <td>
              Do not return your strategy card(s). You do not choose strategy
              cards during the next strategy phase.
            </td>
            <td>
              <i>
                The Winnu councilor breathed a sigh of relief. This opportunity
                would not be wasted. The peace of the Lazax was within grasp.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Politics Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, draw 3 action cards and
              gain the speaker token.
            </td>
            <td>
              <i>
                The Dirzuga had managed to negotiate themselves into a position
                of power amongst the other councilors, all of whom still looked
                terribly uncomfortable in their presence.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Public Disgrace</b>
            </td>
            <td>1</td>
            <td>
              When another player chooses a strategy card during the strategy
              phase:
            </td>
            <td>
              That player must choose a different strategy card instead, if
              able.
            </td>
            <td>
              <i>
                In the months that followed the report, the Council was quick to
                censure the Jol-Nar for their unethical practices.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Reactor Meltdown</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>Destroy 1 space dock in a non-home system.</td>
            <td>
              <i>
                Flames engulfed the shipyard, a vortex of fire and shrapnel that
                left nothing untouched.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Reparations</b>
            </td>
            <td>1</td>
            <td>After another player gains control of a planet you control:</td>
            <td>
              Exhaust 1 planet that player controls and ready 1 planet you
              control.
            </td>
            <td>
              <i>
                Gila oversaw the reconstruction of the Hacan outpost, but
                neglected to inform the N'orr representative that the damage was
                not nearly as severe as he was led to believe.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Repeal Law</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>Discard 1 law from play.</td>
            <td>
              <i>
                Eventually, the N'orr diplomat came to an agreement with Hacan
                Garrus, and the embargo was repealed. Still, he couldn't shake
                the feeling that Garrus had gotten the better end of the deal.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Rise of a Messiah</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Place 1 infantry from your reinforcements on each planet you
              control.
            </td>
            <td>
              <i>
                Harrugh stood atop the dunes, looking down at the thousands of
                Hacan warriors mustered below. Gathering his strength, he let
                loose a mighty roar, the will of his people throughout the
                galaxy echoing forth from within.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Sabotage</b>
            </td>
            <td>4</td>
            <td>
              When another player plays an action card other than "Sabotage":
            </td>
            <td>Cancel that action card.</td>
            <td>
              <i>
                (1) Q'uesh Sish tapped her claws impatiently. "You were
                sssaying?" But the confused Jol-Nar envoy stood silent. It was
                as if the words had escaped his thoughts entirely.
              </i>
              <p>
                <i>
                  (2) trjn.desgn.ALIZARIN introduced itself to each data nodes,
                  incorporating them into its platform, expunging any data it
                  deemed a threat to the Virus.
                </i>
              </p>
              <p>
                <i>
                  (3) unit.desgn.BEELZEBUL followed the group of men through the
                  winding hallways until they stopped at an intersection.
                  Investigators would later find its cracked oculus at the
                  center of a smoking crater, singed, but still functional.
                </i>
              </p>
              <p>
                <i>
                  (4) Unlenn smashed a clenched fist into the bulkhead, green
                  eyes ablaze with rage. The entire plan had been turned on its
                  head. Such incompetence was unfathomable.
                </i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <b>Salvage</b>
            </td>
            <td>1</td>
            <td>After you win a space combat:</td>
            <td>Your opponent gives you all of their commodities.</td>
            <td>
              <i>
                When the Coalition raiders had finally returned to their ships,
                scarcely a bolt remained to salvage from the destroyed vessel.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Shields Holding</b>
            </td>
            <td>4</td>
            <td>Before you assign hits to your ships during a space combat:</td>
            <td>Cancel up to 2 hits.</td>
            <td>
              <i>
                (1) T'ro stared unflinching at the incoming barrage through the
                bridge's observation deck. The shield would hold.(2) The blast
                from the enemy's main cannon slammed into the space in front of
                the warship, splitting into two streams across the bow.(3) The
                ship's shields sizzled and sparked but remained active despite
                the heavy assault.(4) As the assault died down and it became
                clear that the ship sustained no major damage, T'ro clicked his
                mandibles in anticipation. "Return fire!"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Signal Jamming</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Chose 1 non-home system that contains or is adjacent to 1 of your
              ships. Place a command token from another player's reinforcements
              in that system.
            </td>
            <td>
              <i>
                Meian was practically aglow, wisps of her ether crackling with
                delight. It was amazing what could be achieved with a well-timed
                electromagnetic discharge.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Skilled Retreat</b>
            </td>
            <td>4</td>
            <td>At the start of a combat round:</td>
            <td>
              Move all of your ships from the active system into an adjacent
              system that does not contain another player's ships; the space
              combat ends in a draw. Then, place a command token from your
              reinforcements in that system.
            </td>
            <td>
              <i>
                (1) In an instant, the Sol fleet vanished from the Barony's
                scanners.
              </i>
              <p>
                <i>
                  (2) The Creuss fleet was gone. No trace remained of their
                  passage.
                </i>
              </p>
              <p>
                <i>
                  (3) T'ro gave the order, and the entire fleet withdrew without
                  question.
                </i>
              </p>
              <p>
                <i>
                  (4) "We have no choice, captain." Ciel looked nervous."We must
                  retreat."
                </i>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <b>Spy</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 player. That player gives you 1 random action card from
              their hand.
            </td>
            <td>
              <i>
                "I'm no spy," Connor said, casually stuffing the data drives
                into his pack. "Now, how can I get out of here without being
                seen?"
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Summit</b>
            </td>
            <td>1</td>
            <td>At the start of the strategy phase:</td>
            <td>Gain 2 command tokens.</td>
            <td>
              <i>
                At the end of the twelfth day, Rev returned home from the summit
                in New Moscow feeling physically exhausted and mentally drained.
                But she was also satisfied. They had a plan - finally - and it
                was a good plan.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Tactical Bombardment</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 system that contains 1 or more of your units that have
              Bombardment. Exhaust each planet controlled by other players in
              that system.
            </td>
            <td>
              <i>
                A6's red eyes flickered with activity and a string of numbers
                flashed briefly across the screen before he spoke. "Bombardment
                complete. All enemy installations have been neutralized."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Technology Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, research 1 technology.
            </td>
            <td>
              <i>
                The Council granted the Yin funding to research an effective
                countermeasure to combat the virus. After all, keeping the Yin
                occupied with the virus meant killing two birds with one stone.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Trade Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, gain 5 trade goods.
            </td>
            <td>
              <i>
                The Letnev councilor begrudgingly accepted the N'orr's core
                mining contract, if only so that the "gracious" Hacan senator
                didn't secure yet another source of income for his clan.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Unexpected Action</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Remove 1 of your command tokens from the game board and return it
              to your reinforcements.
            </td>
            <td>
              <i>
                M'aban's voice was barely a whisper, cracking as hundreds of
                flashing lights appeared on her scanner. "We've been tricked."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Unstable Planet</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 hazardous planet. Exhaust that planet and destroy up to 3
              infantry on it.
            </td>
            <td>
              <i>
                Another quake shook the planet, and a wave of dirt and rock rose
                up to swallow the Tekklar legion.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Upgrade</b>
            </td>
            <td>1</td>
            <td>
              After you activate a system that contains 1 or more of your ships:
            </td>
            <td>
              Replace one of your cruisers in that system with one of your
              dreadnoughts from your reinforcements.
            </td>
            <td>
              <i>
                "More guns?" Connor shook his head. "Not more guns. Let's try
                something bigger."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Uprising</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Exhaust 1 non-home planet controlled by another player. Then gain
              trade goods equal to its resource value.
            </td>
            <td>
              <i>
                Harrugh leapt down from the ledge, gyro-spear blazing in the
                sunlight. In front, the L1Z1X began to take notice. Behind his
                warriors stood at the ready. Win or lose, this would be the end.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Veto</b>
            </td>
            <td>1</td>
            <td>When an agenda is revealed:</td>
            <td>
              Discard that agenda and reveal 1 agenda from the top of the deck.
              Players vote on this agenda instead.
            </td>
            <td>
              <i>
                Magmus batted the now charred corpse aside with the back of his
                golden gauntlet. "The Muuat reject your proposal."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>War Effort</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Place 1 cruiser from your reinforcements in a system that contains
              1 or more of your ships.
            </td>
            <td>
              <i>
                The N'orr may not be the most proficient shipwrights, but the
                willingness of their citizens to do their part far exceeds that
                of the other great races.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Warfare Rider</b>
            </td>
            <td>1</td>
            <td>After an agenda is revealed:</td>
            <td>
              You cannot vote on this agenda. Predict aloud an outcome of this
              agenda. If your prediction is correct, place 1 dreadnought from
              your reinforcements in a system that contains 1 or more of your
              ships.
            </td>
            <td>
              <i>
                Elder Junn sighed. "Disarmament, it seems, has fallen out of
                fashion in these dark days."
              </i>
            </td>
          </tr>

          <tr>
            <td>
              <b>Archaeological Expedition</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Reveal the top 3 cards of an exploration deck that matches a
              planet you control; gain any relic fragments that you reveal and
              discard the rest.
            </td>
            <td>
              <i>
                Hiari pressed the activation glyphs, and the ancient door hissed
                open. As she stepped into the pitch-black interior of the Mahact
                tomb, she felt a shiver of anticipation. Perhaps, finally, she
                would find the Codex.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Confounding Legal Text</b>
            </td>
            <td>1</td>
            <td>When another player is elected as the outcome of an agenda:</td>
            <td>You are the elected player instead.</td>
            <td>
              <i>
                "Unfortunately," Cinnabian said in a level voice, "the Galactic
                Council requires the dispute be arbitrated by a truly neutral
                party. As the Titans were still slumbering when your war began,
                we will oversee your negotiations... instead of your friends on
                Jord."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Coup d'Etat</b>
            </td>
            <td>1</td>
            <td>When another player would perform a strategic action:</td>
            <td>
              End that player's turn; the strategic action is not resolved and
              the strategy card is not exhausted.
            </td>
            <td>
              <i>
                Artuno shoved the slug pistol into Huro's face as armored
                mercenaries stormed into the office. "I'm afraid the station's
                undergoing a change in management."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Deadly Plot</b>
            </td>
            <td>1</td>
            <td>During the agenda phase, when an outcome would be resolved:</td>
            <td>
              If you voted for or predicted another outcome, discard the agenda
              instead; the agenda is resolved with no effect and it is not
              replaced.<p>Then, exhaust all of your planets.</p>
            </td>
            <td>
              <i>
                The hooded envoy erupted into a nightmare of black metal,
                lunging at the shocked diplomats.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Decoy Operation</b>
            </td>
            <td>1</td>
            <td>
              After another player activates a system that contains 1 or more of
              your structures:
            </td>
            <td>
              Remove up to 2 of your ground forces from the game board and place
              them on a planet you control in the active system.
            </td>
            <td>
              <i>
                Enemy fire lashed the abandoned positions on the ridgeline as
                Trilossa's flock slipped unseen around their flanks.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Diplomatic Pressure</b>
            </td>
            <td>4</td>
            <td>When an agenda is revealed:</td>
            <td>
              Choose another player; that player must give you 1 promissory note
              from their hand.
            </td>
            <td>
              <i>
                (1) The Arborec emissary leaned close, and Brother Milor
                flinched at the faint whiff of decay. "You do not understand,"
                Dirzuga Ohao rasped. "You must support this measure."(2) Brother
                Milor shook his head. "The Brotherhood cannot support your war
                against this extra-dimensional threat." Dirzuga Ohao raised an
                eyebrow. "Are you certain?"(3) "It would be unfortunate," the
                Arborec Dirzuga said, "if your supplies of diraxium were to dry
                up. How would your fleet defend you if we stopped supplying its
                fuel?"(4) "Damn you!" Brother Milor hissed. "You leave us no
                choice but to fight in your war." Dirzuga Ohao smiled, dead skin
                stretching over her teeth.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Divert Funding</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Return a non-unit upgrade, non-faction technology that you own to
              your technology deck. Then, research another technology.
            </td>
            <td>
              <i>
                "I am sorry, Academician," Arbiter Berekon shrugged. "I am sure
                psychoarchaeology is an interesting subject, but the supreme
                leader feels your budget would be better spent on more
                militaristic research."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Exploration Probe</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Explore a frontier token that is in or adjacent to a system that
              contains 1 or more of your ships.
            </td>
            <td>
              <i>
                With a dull thud, the probe shot from the cruiser and
                accelerated into the writhing maelstrom of the gravity rift.
                Admiral DeLouis paced on the bridge. Hopefully, this time the
                probe would return.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Manipulate Investments</b>
            </td>
            <td>1</td>
            <td>At the start of the Strategy Phase:</td>
            <td>
              Place a total of 5 trade goods from the supply on strategy cards
              of your choice; you must place these tokens on at least 3
              different cards.
            </td>
            <td>
              <i>
                "But my good fellow," the envoy sputtered. "Surely you can't
                expect me to agree to those prices!" Durruq leaned in close.
                "Check again. You may find your goods are trading for less than
                you think."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Nav Suite</b>
            </td>
            <td>1</td>
            <td>After you activate a system:</td>
            <td>
              During the "Movement" step of this tactical action, ignore the
              effects of anomalies.
            </td>
            <td>
              <i>
                "The field is too thick!" Sikosk gasped. Trrakan's plume flared.
                "Not for me, and not for Iruth." A flick of his talon, and the
                destroyer flipped and dove for the asteroid field.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Refit Troops</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 or 2 of your infantry on the game board; replace each of
              those infantry with mechs.
            </td>
            <td>
              <i>
                Sek'kus leapt from the trenches, the plasma projectors on her
                Valkyrie ekoskeleton howling as they scoured the field ahead of
                her.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Reveal Prototype</b>
            </td>
            <td>1</td>
            <td>At the start of a combat:</td>
            <td>
              Spend 4 resources to research a unit upgrade technology of the
              same type as 1 of your units that is participating in this combat.
            </td>
            <td>
              <i>
                Varish and Cole completed the final linkages, activating the
                field harvester. The cruiser's beams roared with renewed power,
                cutting through the enemy ship.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Reverse Engineer</b>
            </td>
            <td>1</td>
            <td>
              When another player discards an action card that has a component
              action:
            </td>
            <td>Take that action card from the discard pile.</td>
            <td>
              <i>
                Xuange spread their hands over the captured harvester. Mirroring
                their careful gestures, dark energy fields unfolded and began
                delicately disassembling the device.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Rout</b>
            </td>
            <td>1</td>
            <td>
              At the start of the "Announce Retreats" step of space combat, if
              you are the defender:
            </td>
            <td>Your opponent must announce a retreat, if able.</td>
            <td>
              <i>
                Vuil'raith fleshships swarmed the weary defenders, sending
                unease and sweeping through the telepathic links. But Z'eu
                projected a powerful feeling of calm, and the Naalu fighters
                began to drive the Cabal back toward the rift.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Scuttle</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 or 2 of your non-fighter ships on the game board and
              return them to your reinforcements; gain trade goods equal to the
              combined cost of those ships.
            </td>
            <td>
              <i>
                Rear Admiral Farran saluted as he watched the blasted starship
                being towed to the scrap yard. "You served me well," he
                whispered. "Now you can serve the Barony once more."
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Seize Artifact</b>
            </td>
            <td>1</td>
            <td>As an Action:</td>
            <td>
              Choose 1 of your neighbors that has 1 or more relic fragments.
              That player must give you 1 relic fragment of your choice.
            </td>
            <td>
              <i>
                Armored dropships crashed into the main dock. Hatches blew open,
                and Captain Mentarion and her commando raider charged into the
                facility's heart.
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <b>Waylay</b>
            </td>
            <td>1</td>
            <td>Before you roll dice for ANTI-FIGHTER BARRAGE:</td>
            <td>
              Hits from this roll are produced against all ships (not just
              fighters).
            </td>
            <td>
              <i>
                The destroyers sprayed fire with their secondary batteries as
                they advanced. The Mahact dreadnought began to list, fire and
                atmosphere gushing from a thousand tiny wounds.
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default acPage;
