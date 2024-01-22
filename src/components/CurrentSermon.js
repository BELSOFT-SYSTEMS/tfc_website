import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CurrentSermon() {
  return (
    <div>
      <section
        data-particle_enable="false"
        data-particle-mobile-disabled="false"
        className="elementor-section elementor-top-section elementor-element elementor-element-0181fdd elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
        data-id="0181fdd"
        data-element_type="section"
        data-settings='{"background_background":"classic","background_motion_fx_motion_fx_scrolling":"yes","background_motion_fx_translateX_effect":"yes","background_motion_fx_translateX_speed":{"unit":"px","size":4,"sizes":[]},"background_motion_fx_translateX_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"background_motion_fx_devices":["desktop","tablet","mobile"]}'
      >
        <div className="elementor-background-overlay"></div>
        <Container>
          <Row>
            <Col md={6} className="elementor-hidden-mobile">
              {/* Empty column as per the original structure */}
            </Col>
            <Col md={6}>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-642c1744 elementor-invisible elementor-widget elementor-widget-heading"
                  data-id="642c1744"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Current Sermon Series
                    </h2>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-0dd751a elementor-invisible elementor-widget elementor-widget-text-editor"
                  data-id="0dd751a"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Come hear the teaching of God’s Word live in Ajax or via
                        video across our locations. Each sermon, full of grace
                        and truth, is culturally relevant to today’s ever
                        changing social, political, and religious climate.
                      </span>
                      <br />
                    </p>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        Missed a past sermon or want to go back and listen to a
                        series? Click below to view our sermon archive.
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4e3d176 elementor-invisible elementor-widget elementor-widget-button"
                  data-id="4e3d176"
                  data-element_type="widget"
                  data-settings='{"_animation":"fadeInRight"}'
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Button
                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                        href="https://sanctuschurch.com/sermons/"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            Watch now
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default CurrentSermon;