import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillsList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
      <h1 className="sectionTitle">Tools</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Adobe Target" />
        <SkillList src={checkMarkIcon} skill="FIGMA" />
        <SkillList src={checkMarkIcon} skill="Statsig" />
        <SkillList src={checkMarkIcon} skill="Notepad ++" />
      </div>
      <hr />
      <h1 className="sectionTitle">Database skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Mongo DB" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Tableau" />
        <SkillList src={checkMarkIcon} skill="PowerBI" />
      </div>
    </section>
  );
}

export default Skills;
